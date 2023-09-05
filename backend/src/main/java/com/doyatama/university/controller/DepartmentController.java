package com.doyatama.university.controller;

import com.doyatama.university.config.PathConfig;
import com.doyatama.university.model.Department;
import com.doyatama.university.payload.ApiResponse;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.department.DepartmentRequest;
import com.doyatama.university.payload.department.DepartmentResponse;
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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.UUID;

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
    @Secured("ROLE_ADMINISTRATOR")
    public PagedResponse<DepartmentResponse> getDepartment(@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                           @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return departmentService.getAllDepartment(page, size);
    }

//    @PostMapping
//    public ResponseEntity<?> createDepartment(@RequestPart(value = "file", required = false) MultipartFile file, @ModelAttribute UserPrincipal departmentRequest) throws IOException {
//
//    if (file != null && !file.isEmpty()) {
//        // upload file
//        try {
//            // Mendapatkan nama file asli
//            String originalFileName = file.getOriginalFilename();
//
//            // Mendapatkan ekstensi file
//            String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
//
//            // Mendapatkan timestamp saat ini
//            String timestamp = String.valueOf(System.currentTimeMillis());
//
//            // Membuat UUID baru
//            String uuid = UUID.randomUUID().toString();
//
//            // Menggabungkan timestamp dan UUID
//            String newFileName = "file_" + timestamp + "_" + uuid;
//            String filePath = PathConfig.storagePath + "/" + newFileName + fileExtension;
//            File newFile = new File(filePath);
//
//            // Menyimpan file ke lokasi yang ditentukan di server
//            file.transferTo(newFile);
//
//            // Mendapatkan local path dari file yang disimpan
//            String localPath = newFile.getAbsolutePath();
//
//            // Simpan file ke database MySQL
//            // Anda perlu mengganti ini dengan kode yang sesuai dengan cara Anda menyimpan file ke database MySQL.
//            // Ini dapat melibatkan konversi file menjadi byte array dan penyimpanan byte array ke database.
//
//            // Setelah Anda menyimpan file ke database, Anda dapat mengambil ID atau lokasi penyimpanan yang sesuai
//            // dari database dan menggunakannya dalam objek savePath. Contohnya:
//            String savePath = "mysql://localhost:3306/departments/" + newFileName + fileExtension;
//
//            newFile.delete();
//            Department department = departmentService.createDepartment(departmentRequest, savePath);
//
//            if (department == null) {
//                return ResponseEntity.badRequest()
//                        .body(new ApiResponse(false, "Please check relational ID"));
//            } else {
//                URI location = ServletUriComponentsBuilder
//                        .fromCurrentRequest().path("/{departmentId}")
//                        .buildAndExpand(department.getId()).toUri();
//
//                return ResponseEntity.created(location)
//                        .body(new ApiResponse(true, "Department Created Successfully"));
//            }
//        } catch (IOException e) {
//            // Penanganan kesalahan saat menyimpan file
//            e.printStackTrace();
//            return ResponseEntity.badRequest()
//                    .body(new ApiResponse(false, "Cannot Upload File"));
//        }
//    } else {
//        // Tidak ada input file
//        Department department = departmentService.createDepartment(departmentRequest, "");
//
//        if (department == null) {
//            return ResponseEntity.badRequest()
//                    .body(new ApiResponse(false, "Please check relational ID"));
//        } else {
//            URI location = ServletUriComponentsBuilder
//                    .fromCurrentRequest().path("/{departmentId}")
//                    .buildAndExpand(department.getId()).toUri();
//
//            return ResponseEntity.created(location)
//                    .body(new ApiResponse(true, "Department Created Successfully"));
//        }
//    }
//}


    @PostMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> createDepartment(@CurrentUser UserPrincipal currentUser, @Valid @RequestBody DepartmentRequest departmentRequest) {
        Department department = departmentService.createDepartment(currentUser, departmentRequest);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{departmentId}")
                .buildAndExpand(department.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Department Created Successfully"));
    }

    @PutMapping("/{departmentId}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> updateDepartmentById(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "departmentId") Long departmentId, @Valid @RequestBody DepartmentRequest departmentRequest) {
        Department department = departmentService.updateDepartment(departmentRequest, departmentId, currentUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{departmentId}")
                .buildAndExpand(department.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Department Updated Successfully"));
    }

    @GetMapping("/{departmentId}")
    @Secured("ROLE_ADMINISTRATOR")
    public DepartmentResponse getDepartmentById(@PathVariable Long departmentId) {
        return departmentService.getDepartmentById(departmentId);
    }

    @DeleteMapping("/{departmentId}")
    @Secured("ROLE_ADMINISTRATOR")
    public HttpStatus deleteDepartment(@PathVariable (value = "departmentId") Long departmentId){
        departmentService.deleteDepartmentById(departmentId);
        return HttpStatus.FORBIDDEN;
    }
}
