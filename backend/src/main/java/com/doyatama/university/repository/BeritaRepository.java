package com.doyatama.university.repository;

import com.doyatama.university.model.Berita;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *
 * @author Doyatama
 */
@Repository
public interface BeritaRepository extends JpaRepository<Berita, Long> {
    @Override
    Optional<Berita> findById(Long id);
}
