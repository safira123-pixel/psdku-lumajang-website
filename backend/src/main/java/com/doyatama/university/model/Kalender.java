package com.doyatama.university.model;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class Kalender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fileName;

    @Lob
    private byte[] data;

    public Kalender() {
    }

    public Kalender(Long id) {
        this.id = id;
    }

    public Kalender(Long id, String fileName, byte[] data) {
        this.id = id;
        this.fileName = fileName; // Corrected parameter name to "fileName"
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

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}