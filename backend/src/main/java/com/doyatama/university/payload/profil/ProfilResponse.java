package com.doyatama.university.payload.profil;
import org.springframework.web.multipart.MultipartFile;

import java.time.Instant;

public class ProfilResponse {
    private Long id;
    private String name;
    private String description;
    private String fileDir;
    private Instant updatedAt;
    private Instant createdAt;


    public ProfilResponse() {
    }

    public ProfilResponse(Long id, String name, String description, String fileDir, Instant updatedAt, Instant createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.fileDir = fileDir;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
    public String getFileDir() {
        return fileDir;
    }

    public void setFileDir(String fileDir) {
        this.fileDir = fileDir;
    }
}
