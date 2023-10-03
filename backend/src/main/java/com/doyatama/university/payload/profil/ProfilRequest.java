package com.doyatama.university.payload.profil;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

public class ProfilRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    private MultipartFile file;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
