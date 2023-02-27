package com.titulacion.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioDtoResponse {
	private String correo;
	private String clave;
	private boolean activo;
}
