package com.titulacion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="usuario")
public class Usuario {
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String usuarioCorreo;
	private String usuarioClave;
}
