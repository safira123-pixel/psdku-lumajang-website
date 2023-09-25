package com.doyatama.university.payload.department;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Lob;
import java.time.Instant;

public class DepartmentResponse {
    private Long id;
    private String name;
    private String description;
    private String kompetensi;
    private String peluang;
    private Instant updatedAt;
    private Instant createdAt;
    private String fileDir;

    public DepartmentResponse() {
    }


    public DepartmentResponse(Long id, String name, String description, String kompetensi, String peluang, Instant updatedAt, Instant createdAt, String fileDir) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.kompetensi = kompetensi;
        this.peluang = peluang;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.fileDir = fileDir;
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

    public String getKompetensi() {
        return kompetensi;
    }

    public void setKompetensi(String kompetensi) {
        this.kompetensi = kompetensi;
    }

    public String getPeluang() {
        return peluang;
    }

    public void setPeluang(String peluang) {
        this.peluang = peluang;
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
