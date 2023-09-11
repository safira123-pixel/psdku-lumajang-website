package com.doyatama.university.controller;

import com.doyatama.university.model.Kalender;
import com.doyatama.university.payload.File.KalenderUploadRequest;
import com.doyatama.university.payload.File.KalenderUploadResponse;
import com.doyatama.university.service.KalenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/kalender")
public class KalenderController {

    @Autowired
    private KalenderService kalenderService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@ModelAttribute KalenderUploadRequest kalenderUploadRequest) {
        try {
            MultipartFile file = kalenderUploadRequest.getFile();
            kalenderService.saveFile(file);
            return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<KalenderUploadResponse> downloadFile(@PathVariable Long id) {
        Optional<Kalender> fileOptional = kalenderService.getFileById(id);
        if (fileOptional.isPresent()) {
            Kalender file = fileOptional.get();
            KalenderUploadResponse kalenderUploadResponse = new KalenderUploadResponse();
            kalenderUploadResponse.setFileName(file.getFileName());
            kalenderUploadResponse.setData(file.getData());
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFileName() + "\"")
                    .body(kalenderUploadResponse);
        }
        return ResponseEntity.notFound().build();
    }
}