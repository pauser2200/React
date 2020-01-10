package com.example.demo.entidades;

import lombok.Data;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "BILIONARIOS")
@Data
@ToString
public class Bilionarios {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "PRIMEIRO_NOME")
    private String primeiroNome;
    @Column(name = "ULTIMO_NOME")
    private String segundoNome;
    @Column(name = "CARREIRA")
    private String carreira;
}