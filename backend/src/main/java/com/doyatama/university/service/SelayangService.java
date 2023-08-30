package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Selayang;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.selayang.SelayangRequest;
import com.doyatama.university.payload.selayang.SelayangResponse;
import com.doyatama.university.repository.SelayangRepository;
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
public class SelayangService {
    @Autowired
    private SelayangRepository selayangRepository;

    private static final Logger logger = LoggerFactory.getLogger(SelayangService.class);

    public PagedResponse<SelayangResponse> getAllSelayang(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Selayang> selayangs = selayangRepository.findAll(pageable);

        if(selayangs.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), selayangs.getNumber(),
                    selayangs.getSize(), selayangs.getTotalElements(), selayangs.getTotalPages(), selayangs.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<SelayangResponse> selayangResponses = selayangs.map(asResponse -> {
            SelayangResponse selayangResponse = new SelayangResponse();
            selayangResponse.setId(asResponse.getId());
            selayangResponse.setName(asResponse.getName());
            selayangResponse.setDescription(asResponse.getDescription());
            selayangResponse.setCreatedAt(asResponse.getCreatedAt());
            selayangResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return selayangResponse;
        }).getContent();

        return new PagedResponse<>(selayangResponses, selayangs.getNumber(),
                selayangs.getSize(), selayangs.getTotalElements(), selayangs.getTotalPages(), selayangs.isLast(), 200);
    }

    public Selayang createSelayang(UserPrincipal currentUser, SelayangRequest selayangRequest) {
        Selayang selayang = new Selayang();
        selayang.setName(selayangRequest.getName());
        selayang.setDescription(selayangRequest.getDescription());
        selayang.setCreatedBy(currentUser.getId());
        selayang.setUpdatedBy(currentUser.getId());
        return selayangRepository.save(selayang);
    }

    public SelayangResponse getSelayangById(Long selayangId) {
        Selayang selayang = selayangRepository.findById(selayangId).orElseThrow(
                () -> new ResourceNotFoundException("Selayang", "id", selayangId));

        SelayangResponse selayangResponse = new SelayangResponse();
        selayangResponse.setId(selayang.getId());
        selayangResponse.setName(selayang.getName());
        selayangResponse.setDescription(selayang.getDescription());
        selayangResponse.setCreatedAt(selayang.getCreatedAt());
        selayangResponse.setUpdatedAt(selayang.getUpdatedAt());
        return selayangResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

    public Selayang updateSelayang(SelayangRequest selayangReq, Long id, UserPrincipal currentUser){
        return selayangRepository.findById(id).map(selayang -> {
            selayang.setName(selayangReq.getName());
            selayang.setDescription(selayangReq.getDescription());
            selayang.setUpdatedBy(currentUser.getId());
            return selayangRepository.save(selayang);
        }).orElseThrow(() -> new ResourceNotFoundException("Selayang" , "id" , id));
    }

    public void deleteSelayangById(Long id){
        Optional<Selayang> selayang = selayangRepository.findById(id);
        if(selayang.isPresent()){
            selayangRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Selayang", "id", id);
        }
    }
}