package com.example.demo.repository;

import com.example.demo.entidades.Bilionarios;
import com.example.demo.entidades.BilionariosSemValidacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BilionariosSemValidacaoRepository extends JpaRepository<BilionariosSemValidacao, Integer> {

    @Query(value = "FROM BilionariosSemValidacao BSV WHERE BSV.pk.bilionarios.id=?1")
    BilionariosSemValidacao buscarPorId(Integer id);

    BilionariosSemValidacao findByPkBilionariosId(Integer id);
}
