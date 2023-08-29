package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Kegiatan;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.kegiatan.KegiatanRequest;
import com.doyatama.university.payload.kegiatan.KegiatanResponse;
import com.doyatama.university.repository.KegiatanRepository;
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
public class KegiatanService {
    @Autowired
    private KegiatanRepository kegiatanRepository;

    private static final Logger logger = LoggerFactory.getLogger(KegiatanService.class);

    public PagedResponse<KegiatanResponse> getAllKegiatan(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Kegiatan> kegiatans = kegiatanRepository.findAll(pageable);

        if(kegiatans.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), kegiatans.getNumber(),
                    kegiatans.getSize(), kegiatans.getTotalElements(), kegiatans.getTotalPages(), kegiatans.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<KegiatanResponse> kegiatanResponses = kegiatans.map(asResponse -> {
            KegiatanResponse kegiatanResponse = new KegiatanResponse();
            kegiatanResponse.setId(asResponse.getId());
            kegiatanResponse.setName(asResponse.getName());
            kegiatanResponse.setDescription(asResponse.getDescription());
            kegiatanResponse.setCreatedAt(asResponse.getCreatedAt());
            kegiatanResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return kegiatanResponse;
        }).getContent();

        return new PagedResponse<>(kegiatanResponses, kegiatans.getNumber(),
                kegiatans.getSize(), kegiatans.getTotalElements(), kegiatans.getTotalPages(), kegiatans.isLast(), 200);
    }

    public Kegiatan createKegiatan(UserPrincipal currentUser, KegiatanRequest kegiatanRequest) {
        Kegiatan kegiatan = new Kegiatan();
        kegiatan.setName(kegiatanRequest.getName());
        kegiatan.setDescription(kegiatanRequest.getDescription());
        kegiatan.setCreatedBy(currentUser.getId());
        kegiatan.setUpdatedBy(currentUser.getId());
        return kegiatanRepository.save(kegiatan);
    }

    public KegiatanResponse getKegiatanById(Long kegiatanId) {
        Kegiatan kegiatan = kegiatanRepository.findById(kegiatanId).orElseThrow(
                () -> new ResourceNotFoundException("Kegiatan", "id", kegiatanId));

        KegiatanResponse kegiatanResponse = new KegiatanResponse();
        kegiatanResponse.setId(kegiatan.getId());
        kegiatanResponse.setName(kegiatan.getName());
        kegiatanResponse.setDescription(kegiatan.getDescription());
        kegiatanResponse.setCreatedAt(kegiatan.getCreatedAt());
        kegiatanResponse.setUpdatedAt(kegiatan.getUpdatedAt());
        return kegiatanResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

    public Kegiatan updateKegiatan(KegiatanRequest kegiatanReq, Long id, UserPrincipal currentUser){
        return kegiatanRepository.findById(id).map(kegiatan -> {
            kegiatan.setName(kegiatanReq.getName());
            kegiatan.setDescription(kegiatanReq.getDescription());
            kegiatan.setUpdatedBy(currentUser.getId());
            return kegiatanRepository.save(kegiatan);
        }).orElseThrow(() -> new ResourceNotFoundException("Kegiatan" , "id" , id));
    }

    public void deleteKegiatanById(Long id){
        Optional<Kegiatan> kegiatan = kegiatanRepository.findById(id);
        if(kegiatan.isPresent()){
            kegiatanRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Kegiatan", "id", id);
        }
    }
}