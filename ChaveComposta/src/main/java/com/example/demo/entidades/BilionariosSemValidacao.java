package com.example.demo.entidades;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "BILIONARIOS_SEM_VALID")
@Data
@ToString
public class BilionariosSemValidacao {
    @EmbeddedId
    BilionariosSemValidacaoPK pk;
}
