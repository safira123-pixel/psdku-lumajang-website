package com.doyatama.university.controller;

import com.doyatama.university.model.Selayang;
import com.doyatama.university.payload.ApiResponse;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.selayang.SelayangRequest;
import com.doyatama.university.payload.selayang.SelayangResponse;
import com.doyatama.university.repository.SelayangRepository;
import com.doyatama.university.repository.UserRepository;
import com.doyatama.university.security.CurrentUser;
import com.doyatama.university.security.UserPrincipal;
import com.doyatama.university.service.SelayangService;
import com.doyatama.university.util.AppConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/selayang")
public class SelayangPandangController {
    @Autowired
    private SelayangRepository selayangRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SelayangService selayangService;

    private static final Logger logger = LoggerFactory.getLogger(SelayangPandangController.class);

    @GetMapping
    @Secured("ROLE_ADMINISTRATOR")
    public PagedResponse<SelayangResponse> getSelayang(@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                           @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return selayangService.getAllSelayang(page, size);
    }

    @PostMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> createSelayang(@CurrentUser UserPrincipal currentUser, @Valid @RequestBody SelayangRequest selayangRequest) {
        Selayang selayang = selayangService.createSelayang(currentUser, selayangRequest);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{selayangId}")
                .buildAndExpand(selayang.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Selayang Pandang Created Successfully"));
    }

    @PutMapping("/{selayangId}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> updateSelayangById(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "selayangId") Long selayangId, @Valid @RequestBody SelayangRequest selayangRequest) {
        Selayang selayang = selayangService.updateSelayang(selayangRequest, selayangId, currentUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{selayangId}")
                .buildAndExpand(selayang.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Selayang Pandang Updated Successfully"));
    }

    @GetMapping("/{selayangId}")
    @Secured("ROLE_ADMINISTRATOR")
    public SelayangResponse getSelayangById(@PathVariable Long selayangId) {
        return selayangService.getSelayangById(selayangId);
    }

    @DeleteMapping("/{selayangId}")
    @Secured("ROLE_ADMINISTRATOR")
    public HttpStatus deleteSelayang(@PathVariable (value = "selayangId") Long selayangId){
        selayangService.deleteSelayangById(selayangId);
        return HttpStatus.FORBIDDEN;
    }
}
