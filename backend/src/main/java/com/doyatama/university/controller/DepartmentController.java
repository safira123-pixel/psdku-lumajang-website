package com.doyatama.university.controller;

import com.doyatama.university.model.Department;
import com.doyatama.university.payload.ApiResponse;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.department.DepartmentRequest;
import com.doyatama.university.payload.department.DepartmentResponse;
import com.doyatama.university.payload.storage.UploadFileResponse;
import com.doyatama.university.repository.DepartmentRepository;
import com.doyatama.university.repository.UserRepository;
import com.doyatama.university.security.CurrentUser;
import com.doyatama.university.security.UserPrincipal;
import com.doyatama.university.service.DepartmentService;
import com.doyatama.university.util.AppConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;
import java.io.IOException;
import java.net.URI;

@RestController
@RequestMapping("/api/department")
public class DepartmentController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DepartmentService departmentService;

    private static final Logger logger = LoggerFactory.getLogger(DepartmentController.class);

    @GetMapping
//    @Secured("ROLE_ADMINISTRATOR")
    public PagedResponse<DepartmentResponse> getDepartment(@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                           @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return departmentService.getAllDepartment(page, size);
    }

    @PostMapping
//    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> createDepartment(@CurrentUser UserPrincipal currentUser, @Valid @ModelAttribute DepartmentRequest departmentRequest, @RequestParam("file") MultipartFile file) throws IOException {
//        MultipartFile file = departmentRequest.getFile();
        Department department = departmentService.createDepartment(currentUser, departmentRequest, file);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{departmentId}")
                .buildAndExpand(department.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Department Created Successfully"));
//
//        return new UploadFileResponse(department, fileDownloadUri,
//                file.getContentType(), file.getSize());
    }

    @PutMapping("/{departmentId}")
//    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> updateDepartmentById(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "departmentId") Long departmentId, @Valid @RequestBody DepartmentRequest departmentRequest) {
        Department department = departmentService.updateDepartment(departmentRequest, departmentId, currentUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{departmentId}")
                .buildAndExpand(department.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Department Updated Successfully"));
    }

    @GetMapping("/{departmentId}")
//    @Secured("ROLE_ADMINISTRATOR")
    public DepartmentResponse getDepartmentById(@PathVariable Long departmentId) {
        return departmentService.getDepartmentById(departmentId);
    }

    @DeleteMapping("/{departmentId}")
//    @Secured("ROLE_ADMINISTRATOR")
    public HttpStatus deleteDepartment(@PathVariable (value = "departmentId") Long departmentId){
        departmentService.deleteDepartmentById(departmentId);
        return HttpStatus.FORBIDDEN;
    }
}
