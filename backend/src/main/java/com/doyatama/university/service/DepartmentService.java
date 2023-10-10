package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.FileStorageException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Department;
import com.doyatama.university.model.Organisasi;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.department.DepartmentRequest;
import com.doyatama.university.payload.department.DepartmentResponse;
import com.doyatama.university.payload.organisasi.OrganisasiUploadRequest;
import com.doyatama.university.property.FileStorageProperties;
import com.doyatama.university.repository.DepartmentRepository;
import com.doyatama.university.security.UserPrincipal;
import com.doyatama.university.util.AppConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Doyatama
 */
@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;

    private final Path fileStorageLocation;

    private static final Logger logger = LoggerFactory.getLogger(DepartmentService.class);

    @Autowired
    public DepartmentService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public PagedResponse<DepartmentResponse> getAllDepartment(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Department> departments = departmentRepository.findAll(pageable);

        if(departments.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), departments.getNumber(),
                    departments.getSize(), departments.getTotalElements(), departments.getTotalPages(), departments.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<DepartmentResponse> departmentResponses = departments.map(asResponse -> {
            DepartmentResponse departmentResponse = new DepartmentResponse();
            departmentResponse.setId(asResponse.getId());
            departmentResponse.setName(asResponse.getName());
            departmentResponse.setDescription(asResponse.getDescription());
            departmentResponse.setKompetensi(asResponse.getKompetensi());
            departmentResponse.setPeluang(asResponse.getPeluang());
//            departmentResponse.setCreatedAt(asResponse.getCreatedAt());
//            departmentResponse.setUpdatedAt(asResponse.getUpdatedAt());
            departmentResponse.setFileName(asResponse.getFileName());
            departmentResponse.setFileType(asResponse.getFileType());
            departmentResponse.setData(asResponse.getData());

            return departmentResponse;
        }).getContent();

        return new PagedResponse<>(departmentResponses, departments.getNumber(),
                departments.getSize(), departments.getTotalElements(), departments.getTotalPages(), departments.isLast(), 200);
    }
    public Department createDepartment(UserPrincipal currentUser, @Valid DepartmentRequest departmentRequest, MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Department department = new Department();
//        organisasi.setCreatedBy(currentUser.getId());
//        organisasi.setUpdatedBy(currentUser.getId());
        department.setName(departmentRequest.getName());
        department.setDescription(departmentRequest.getDescription());
        department.setKompetensi(departmentRequest.getKompetensi());
        department.setPeluang(departmentRequest.getPeluang());
        department.setFileName(fileName);
        department.setFileType(file.getContentType());
        department.setData(file.getBytes());

        return departmentRepository.save(department);


    }

//    public Department createDepartment(UserPrincipal currentUser, @Valid DepartmentRequest departmentRequest, MultipartFile file) throws IOException {
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//
//        try {
//            // Check if the file's name contains invalid characters
//            if(fileName.contains("..")) {
//                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
//            }
//
//            // Copy file to the target location (Replacing existing file with the same name)
//            Path targetLocation = this.fileStorageLocation.resolve(fileName);
//            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
//            Department department = new Department();
//            department.setName(departmentRequest.getName());
//            department.setDescription(departmentRequest.getDescription());
//            department.setKompetensi(departmentRequest.getKompetensi());
//            department.setPeluang(departmentRequest.getPeluang());
////            department.setCreatedBy(currentUser.getId());
////            department.setUpdatedBy(currentUser.getId());
//            department.setFileName(fileName);
//            department.setFileType(file.getContentType());
//            department.setData(file.getBytes());
//            return departmentRepository.save(department);
//        } catch (IOException ex) {
//            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
//        }
//
//    }

    public DepartmentResponse getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department", "id", departmentId));

        DepartmentResponse departmentResponse = new DepartmentResponse();
        departmentResponse.setId(department.getId());
        departmentResponse.setName(department.getName());
        departmentResponse.setDescription(department.getDescription());
        departmentResponse.setKompetensi(department.getKompetensi());
        departmentResponse.setPeluang(department.getPeluang());

//        departmentResponse.setCreatedAt(department.getCreatedAt());
//        departmentResponse.setUpdatedAt(department.getUpdatedAt());
        return departmentResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }
    public Department updateDepartment(@Valid DepartmentRequest departmentRequest, Long id, UserPrincipal currentUser, MultipartFile file) throws IOException {
        return departmentRepository.findById(id).map(department -> {
//            kalender.setUpdatedBy(currentUser.getId());
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            // Kalender kalender = new Kalender();
            //        kalender.setCreatedBy(currentUser.getId());
            //        kalender.setUpdatedBy(currentUser.getId());
            department.setName(departmentRequest.getName());
            department.setDescription(departmentRequest.getDescription());
            department.setKompetensi(departmentRequest.getKompetensi());
            department.setPeluang(departmentRequest.getPeluang());
            department.setFileName(fileName);
            department.setFileType(file.getContentType());
            try {
                department.setData(file.getBytes());
            } catch (IOException e) {
                // Handle the IOException here or rethrow it as an unchecked exception if needed.
                throw new RuntimeException("Error reading file content: " + e.getMessage(), e);
            }
            return departmentRepository.save(department);
        }).orElseThrow(() -> new ResourceNotFoundException("Department" , "id" , id));
    }
//    public Department updateDepartment(DepartmentRequest departmentReq, Long id, UserPrincipal currentUser, MultipartFile file){
//        return departmentRepository.findById(id).map(department -> {
//            Department department = new Department();
//            department.setName(departmentRequest.getName());
//            department.setDescription(departmentRequest.getDescription());
//            department.setKompetensi(departmentRequest.getKompetensi());
//            department.setPeluang(departmentRequest.getPeluang());
////            department.setCreatedBy(currentUser.getId());
////            department.setUpdatedBy(currentUser.getId());
//            department.setFileName(fileName);
//            department.setFileType(file.getContentType());
//            department.setData(file.getBytes());
//
////            department.setUpdatedBy(currentUser.getId());
//            try {
//                department.setData(file.getBytes());
//            } catch (IOException e) {
//                // Handle the IOException here or rethrow it as an unchecked exception if needed.
//                throw new RuntimeException("Error reading file content: " + e.getMessage(), e);
//            }
//            return departmentRepository.save(department);
//        }).orElseThrow(() -> new ResourceNotFoundException("Department" , "id" , id));
//    }

    public void deleteDepartmentById(Long id){
        Optional<Department> department = departmentRepository.findById(id);
        if(department.isPresent()){
            departmentRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Department", "id", id);
        }
    }
}