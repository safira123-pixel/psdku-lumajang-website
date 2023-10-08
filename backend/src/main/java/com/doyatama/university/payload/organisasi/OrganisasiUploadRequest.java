package com.doyatama.university.payload.organisasi;
import org.springframework.web.multipart.MultipartFile;

public class OrganisasiUploadRequest {
    private MultipartFile file;

    public MultipartFile getFile(){
        return file;
    }
    public void setFile(MultipartFile file){
        this.file = file;
    }
}
