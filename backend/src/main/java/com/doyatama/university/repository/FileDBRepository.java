package com.doyatama.university.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.doyatama.university.model.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}