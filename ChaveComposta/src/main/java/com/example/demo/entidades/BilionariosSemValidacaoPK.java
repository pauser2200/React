package com.example.demo.entidades;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Data
@ToString
@Embeddable
public class BilionariosSemValidacaoPK implements Serializable {

    @ManyToOne
    @JoinColumn(name="BILIONARIO_ID")
    private Bilionarios bilionarios;

//    @Column(name = "BILIONARIO_ID")
//    private Integer id;

}
