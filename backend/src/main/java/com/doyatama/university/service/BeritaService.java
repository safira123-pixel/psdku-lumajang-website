package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Berita;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.berita.BeritaRequest;
import com.doyatama.university.payload.berita.BeritaResponse;
import com.doyatama.university.repository.BeritaRepository;
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
public class BeritaService {
    @Autowired
    private BeritaRepository beritaRepository;

    private static final Logger logger = LoggerFactory.getLogger(BeritaService.class);

    public PagedResponse<BeritaResponse> getAllBerita(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Berita> beritas = beritaRepository.findAll(pageable);

        if(beritas.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), beritas.getNumber(),
                    beritas.getSize(), beritas.getTotalElements(), beritas.getTotalPages(), beritas.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<BeritaResponse> beritaResponses = beritas.map(asResponse -> {
            BeritaResponse beritaResponse = new BeritaResponse();
            beritaResponse.setId(asResponse.getId());
            beritaResponse.setName(asResponse.getName());
            beritaResponse.setDescription(asResponse.getDescription());
            beritaResponse.setCreatedAt(asResponse.getCreatedAt());
            beritaResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return beritaResponse;
        }).getContent();

        return new PagedResponse<>(beritaResponses, beritas.getNumber(),
                beritas.getSize(), beritas.getTotalElements(), beritas.getTotalPages(), beritas.isLast(), 200);
    }

    public Berita createBerita(UserPrincipal currentUser, BeritaRequest beritaRequest) {
        Berita berita = new Berita();
        berita.setName(beritaRequest.getName());
        berita.setDescription(beritaRequest.getDescription());
        berita.setCreatedBy(currentUser.getId());
        berita.setUpdatedBy(currentUser.getId());
        return beritaRepository.save(berita);
    }

    public BeritaResponse getBeritaById(Long beritaId) {
        Berita berita = beritaRepository.findById(beritaId).orElseThrow(
                () -> new ResourceNotFoundException("Berita", "id", beritaId));

        BeritaResponse beritaResponse = new BeritaResponse();
        beritaResponse.setId(berita.getId());
        beritaResponse.setName(berita.getName());
        beritaResponse.setDescription(berita.getDescription());
        beritaResponse.setCreatedAt(berita.getCreatedAt());
        beritaResponse.setUpdatedAt(berita.getUpdatedAt());
        return beritaResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

    public Berita updateBerita(BeritaRequest beritaReq, Long id, UserPrincipal currentUser){
        return beritaRepository.findById(id).map(berita -> {
            berita.setName(beritaReq.getName());
            berita.setDescription(beritaReq.getDescription());
            berita.setUpdatedBy(currentUser.getId());
            return beritaRepository.save(berita);
        }).orElseThrow(() -> new ResourceNotFoundException("Berita" , "id" , id));
    }

    public void deleteBeritaById(Long id){
        Optional<Berita> berita = beritaRepository.findById(id);
        if(berita.isPresent()){
            beritaRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Berita", "id", id);
        }
    }
}