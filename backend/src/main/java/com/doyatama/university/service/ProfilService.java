package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.FileStorageException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Department;
import com.doyatama.university.model.Profil;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.profil.ProfilRequest;
import com.doyatama.university.payload.profil.ProfilResponse;
import com.doyatama.university.property.FileStorageProperties;
import com.doyatama.university.repository.ProfilRepository;
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
public class ProfilService {
    @Autowired
    private ProfilRepository profilRepository;

    private final Path fileStorageLocation;


    private static final Logger logger = LoggerFactory.getLogger(ProfilService.class);

    @Autowired
    public ProfilService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public PagedResponse<ProfilResponse> getAllProfil(int page, int size) {
        validatePageNumberAndSize(page, size);

        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Profil> profils = profilRepository.findAll(pageable);

        if(profils.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), profils.getNumber(),
                    profils.getSize(), profils.getTotalElements(), profils.getTotalPages(), profils.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<ProfilResponse> profilResponses = profils.map(asResponse -> {
            ProfilResponse profilResponse = new ProfilResponse();
            profilResponse.setId(asResponse.getId());
            profilResponse.setName(asResponse.getName());
            profilResponse.setDescription(asResponse.getDescription());
            profilResponse.setFileDir(asResponse.getFileDir());
            profilResponse.setCreatedAt(asResponse.getCreatedAt());
            profilResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return profilResponse;
        }).getContent();

        return new PagedResponse<>(profilResponses, profils.getNumber(),
                profils.getSize(), profils.getTotalElements(), profils.getTotalPages(), profils.isLast(), 200);
    }

    public Profil createProfil(UserPrincipal currentUser, ProfilRequest profilRequest, MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            Profil profil = new Profil();
            profil.setName(profilRequest.getName());
            profil.setDescription(profilRequest.getDescription());
            profil.setFileDir(fileName);
            profil.setCreatedBy(currentUser.getId());
            profil.setUpdatedBy(currentUser.getId());

            return profilRepository.save(profil);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public ProfilResponse getProfilById(Long profilId) {
        Profil profil = profilRepository.findById(profilId).orElseThrow(
                () -> new ResourceNotFoundException("Profil", "id", profilId));

        ProfilResponse profilResponse = new ProfilResponse();
        profilResponse.setId(profil.getId());
        profilResponse.setName(profil.getName());
        profilResponse.setDescription(profil.getDescription());
        profilResponse.setCreatedAt(profil.getCreatedAt());
        profilResponse.setUpdatedAt(profil.getUpdatedAt());
        return profilResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

    public Profil updateProfil(ProfilRequest profilReq, Long id, UserPrincipal currentUser){
        return profilRepository.findById(id).map(profil -> {
            profil.setName(profilReq.getName());
            profil.setDescription(profilReq.getDescription());
            profil.setUpdatedBy(currentUser.getId());
            return profilRepository.save(profil);
        }).orElseThrow(() -> new ResourceNotFoundException("Profil" , "id" , id));
    }

    public void deleteProfilById(Long id){
        Optional<Profil> profil = profilRepository.findById(id);
        if(profil.isPresent()){
            profilRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Profil", "id", id);
        }
    }


}