package com.doyatama.university.controller;

import com.doyatama.university.model.Profil;
import com.doyatama.university.payload.ApiResponse;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.profil.ProfilRequest;
import com.doyatama.university.payload.profil.ProfilResponse;
import com.doyatama.university.repository.ProfilRepository;
import com.doyatama.university.repository.UserRepository;
import com.doyatama.university.security.CurrentUser;
import com.doyatama.university.security.UserPrincipal;
import com.doyatama.university.service.ProfilService;
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
@RequestMapping("/api/profil")
public class ProfilController {
    @Autowired
    private ProfilRepository profilRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfilService profilService;

    private static final Logger logger = LoggerFactory.getLogger(ProfilController.class);

    @GetMapping
    @Secured("ROLE_ADMINISTRATOR")
    public PagedResponse<ProfilResponse> getProfil(@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                   @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return profilService.getAllProfil(page, size);
    }

    @PostMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> createProfil(@CurrentUser UserPrincipal currentUser, @Valid @RequestBody ProfilRequest profilRequest) {
        Profil profil = profilService.createProfil(currentUser, profilRequest);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{profilId}")
                .buildAndExpand(profil.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Profil Created Successfully"));
    }

    @PutMapping("/{profilId}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> updateProfilById(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "profilId") Long profilId, @Valid @RequestBody ProfilRequest profilRequest) {
        Profil profil = profilService.updateProfil(profilRequest, profilId, currentUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{profilId}")
                .buildAndExpand(profil.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Profil Updated Successfully"));
    }

    @GetMapping("/{profilId}")
    @Secured("ROLE_ADMINISTRATOR")
    public ProfilResponse getProfilById(@PathVariable Long profilId) {
        return profilService.getProfilById(profilId);
    }

    @DeleteMapping("/{profilId}")
    @Secured("ROLE_ADMINISTRATOR")
    public HttpStatus deleteProfil(@PathVariable (value = "profilId") Long profilId){
        profilService.deleteProfilById(profilId);
        return HttpStatus.FORBIDDEN;
    }
}
