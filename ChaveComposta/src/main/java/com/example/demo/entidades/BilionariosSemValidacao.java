package com.example.demo.entidades;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Data
@ToString
@Entity
@Table(name = "BILIONARIOS_SEM_VALID")
public class BilionariosSemValidacao {

    @EmbeddedId
    BilionariosSemValidacaoPK pk;
}
