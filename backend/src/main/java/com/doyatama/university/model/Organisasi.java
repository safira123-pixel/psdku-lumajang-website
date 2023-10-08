package com.doyatama.university.model;

import javax.persistence.*;

@Entity
@Table(name = "organisasis")
public class Organisasi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fileType;
    private String fileName;
    @Lob
    private byte[] data;

    public Organisasi() {
    }

    public Organisasi(Long id) {
        this.id = id;
    }


    public Organisasi(Long id, String fileName, String fileType, byte[] data) {
        this.id = id;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }


    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
//    public Instant getUpdatedAt() {
//        return updatedAt;
//    }
//    public void setUpdatedAt(Instant updatedAt) {
//        this.updatedAt = updatedAt;
//    }
//    public Instant getCreatedAt() {
//        return createdAt;
//    }
//    public void setCreatedAt(Instant createdAt) {
//        this.createdAt = createdAt;
//    }

}