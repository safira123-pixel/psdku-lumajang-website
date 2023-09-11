package com.doyatama.university.payload.File;


public class KalenderUploadResponse {
//    private String message;
    private Long id;
    private String fileName;
    private byte [] data;

    public KalenderUploadResponse() {
    }

    public KalenderUploadResponse(Long id, String fileName, byte [] data) {
        this.id = id;
        this.fileName = fileName;
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

    public void setData(byte [] data) {
        this.data = data;
    }

//    public KalenderUploadResponse(String message){
//        this.message = message;
//    }
//
//    public String getMessage(){
//        return message;
//    }
//
//    public void setMessage(){
//        this.message = message;
//    }
}
