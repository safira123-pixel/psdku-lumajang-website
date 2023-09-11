package com.doyatama.university.service;

import com.doyatama.university.model.Kalender;
import com.doyatama.university.repository.KalenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class KalenderService {

    @Autowired
    private KalenderRepository kalenderRepository;

    public void saveFile(MultipartFile file) throws IOException {
        Kalender kalender = new Kalender();
        kalender.setFileName(file.getOriginalFilename());
        kalender.setData(file.getBytes());
        kalenderRepository.save(kalender);
    }

    public Optional<Kalender> getFileById(Long id) {
        return kalenderRepository.findById(id);
    }
}