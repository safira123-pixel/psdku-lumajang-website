package com.doyatama.university.model;

import com.doyatama.university.model.audit.UserDateAudit;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
@Entity
@Table(name = "departments")
public class Department extends UserDateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Lob
    private String description;

    @NotBlank
    @Lob
    private String kompetensi;

    @NotBlank
    @Lob
    private String peluang;

    public Department() {
    }

    public Department(Long id) {
        this.id = id;
    }

    public Department(Long id, String name, String description, String kompetensi, String peluang) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.kompetensi = kompetensi;
        this.peluang = peluang;

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
}
