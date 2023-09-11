package com.doyatama.university.repository;
import com.doyatama.university.model.Kalender;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KalenderRepository extends JpaRepository<Kalender, Long> {
//    Optional<Kalender> findByName(String username);
    Optional<Kalender> findById(Long id);
}
