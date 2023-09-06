package com.doyatama.university.payload.department;

import javax.validation.constraints.NotBlank;

public class DepartmentRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private String kompetensi;

    @NotBlank
    private String peluang;

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
