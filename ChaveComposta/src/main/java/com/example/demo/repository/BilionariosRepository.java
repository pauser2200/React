package com.example.demo.repository;

import com.example.demo.entidades.Bilionarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BilionariosRepository extends JpaRepository<Bilionarios, Integer> {
}
