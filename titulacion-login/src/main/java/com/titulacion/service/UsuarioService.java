package com.titulacion.service;

import java.util.List;

import com.titulacion.dto.UsuarioDtoRequest;
import com.titulacion.dto.UsuarioDtoResponse;

public interface UsuarioService {
	void guardarUsuario(UsuarioDtoRequest usuario);
	void actualizarUsuario(UsuarioDtoRequest usuario);
	List<UsuarioDtoResponse>listarUsuario();
	<T>List<T> listarUsuariosPorUsuarioCorreo(String usuarioCorreo, Class<T> clase) throws Exception;
}
