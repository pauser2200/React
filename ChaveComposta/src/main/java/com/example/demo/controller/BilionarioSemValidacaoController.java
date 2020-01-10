package com.example.demo.controller;

import com.example.demo.entidades.BilionariosSemValidacao;
import com.example.demo.repository.BilionariosSemValidacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "bilionarios", produces ="application/json" )
public class BilionarioSemValidacaoController {

    @Autowired
    BilionariosSemValidacaoRepository repository;


    @GetMapping(value = "/{id}")
    public BilionariosSemValidacao getBilionariosSemValidacao(@PathVariable int id) {
        return findBookById(id);
    }

    private BilionariosSemValidacao findBookById(int id) {
        return repository.buscarPorId(id);
    }
}
