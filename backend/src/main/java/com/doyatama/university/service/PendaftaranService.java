package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Pendaftaran;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.pendaftaran.PendaftaranRequest;
import com.doyatama.university.payload.pendaftaran.PendaftaranResponse;
import com.doyatama.university.repository.PendaftaranRepository;
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
public class PendaftaranService {
    @Autowired
    private PendaftaranRepository pendaftaranRepository;

    private static final Logger logger = LoggerFactory.getLogger(PendaftaranService.class);

    public PagedResponse<PendaftaranResponse> getAllPendaftaran(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Pendaftaran> pendaftarans = pendaftaranRepository.findAll(pageable);

        if(pendaftarans.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), pendaftarans.getNumber(),
                    pendaftarans.getSize(), pendaftarans.getTotalElements(), pendaftarans.getTotalPages(), pendaftarans.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<PendaftaranResponse> pendaftaranResponses = pendaftarans.map(asResponse -> {
            PendaftaranResponse pendaftaranResponse = new PendaftaranResponse();
            pendaftaranResponse.setId(asResponse.getId());
            pendaftaranResponse.setName(asResponse.getName());
            pendaftaranResponse.setDescription(asResponse.getDescription());
            pendaftaranResponse.setCreatedAt(asResponse.getCreatedAt());
            pendaftaranResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return pendaftaranResponse;
        }).getContent();

        return new PagedResponse<>(pendaftaranResponses, pendaftarans.getNumber(),
                pendaftarans.getSize(), pendaftarans.getTotalElements(), pendaftarans.getTotalPages(), pendaftarans.isLast(), 200);
    }

    public Pendaftaran createPendaftaran(UserPrincipal currentUser, PendaftaranRequest pendaftaranRequest) {
        Pendaftaran pendaftaran = new Pendaftaran();
        pendaftaran.setName(pendaftaranRequest.getName());
        pendaftaran.setDescription(pendaftaranRequest.getDescription());
        pendaftaran.setCreatedBy(currentUser.getId());
        pendaftaran.setUpdatedBy(currentUser.getId());
        return pendaftaranRepository.save(pendaftaran);
    }

    public PendaftaranResponse getPendaftaranById(Long pendaftaranId) {
        Pendaftaran pendaftaran = pendaftaranRepository.findById(pendaftaranId).orElseThrow(
                () -> new ResourceNotFoundException("Pendaftaran", "id", pendaftaranId));

        PendaftaranResponse pendaftaranResponse = new PendaftaranResponse();
        pendaftaranResponse.setId(pendaftaran.getId());
        pendaftaranResponse.setName(pendaftaran.getName());
        pendaftaranResponse.setDescription(pendaftaran.getDescription());
        pendaftaranResponse.setCreatedAt(pendaftaran.getCreatedAt());
        pendaftaranResponse.setUpdatedAt(pendaftaran.getUpdatedAt());
        return pendaftaranResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

    public Pendaftaran updatePendaftaran(PendaftaranRequest pendaftaranReq, Long id, UserPrincipal currentUser){
        return pendaftaranRepository.findById(id).map(pendaftaran -> {
            pendaftaran.setName(pendaftaranReq.getName());
            pendaftaran.setDescription(pendaftaranReq.getDescription());
            pendaftaran.setUpdatedBy(currentUser.getId());
            return pendaftaranRepository.save(pendaftaran);
        }).orElseThrow(() -> new ResourceNotFoundException("Pendaftaran" , "id" , id));
    }

    public void deletePendaftaranById(Long id){
        Optional<Pendaftaran> pendaftaran = pendaftaranRepository.findById(id);
        if(pendaftaran.isPresent()){
            pendaftaranRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Pendaftaran", "id", id);
        }
    }
}