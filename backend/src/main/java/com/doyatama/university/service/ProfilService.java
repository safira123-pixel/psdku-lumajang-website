package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Profil;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.profil.ProfilRequest;
import com.doyatama.university.payload.profil.ProfilResponse;
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

    private static final Logger logger = LoggerFactory.getLogger(ProfilService.class);

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
            profilResponse.setCreatedAt(asResponse.getCreatedAt());
            profilResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return profilResponse;
        }).getContent();

        return new PagedResponse<>(profilResponses, profils.getNumber(),
                profils.getSize(), profils.getTotalElements(), profils.getTotalPages(), profils.isLast(), 200);
    }

    public Profil createProfil(UserPrincipal currentUser, ProfilRequest profilRequest) {
        Profil profil = new Profil();
        profil.setName(profilRequest.getName());
        profil.setDescription(profilRequest.getDescription());
        profil.setCreatedBy(currentUser.getId());
        profil.setUpdatedBy(currentUser.getId());
        return profilRepository.save(profil);
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