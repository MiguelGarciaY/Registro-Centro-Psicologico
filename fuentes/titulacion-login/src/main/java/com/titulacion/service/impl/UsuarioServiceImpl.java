package com.titulacion.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.titulacion.dto.UsuarioDtoRequest;
import com.titulacion.dto.UsuarioDtoResponse;
import com.titulacion.model.Usuario;
import com.titulacion.respository.UsuarioRepository;
import com.titulacion.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public void guardarUsuario(UsuarioDtoRequest usuarioDto) {
		Usuario usuario = new Usuario();
		usuario.setUsuarioCorreo(usuarioDto.getCorreo());
		usuario.setUsuarioClave(usuarioDto.getClave());
		usuarioRepository.save(usuario);
	}

	@Override
	public void actualizarUsuario(UsuarioDtoRequest usuarioDto) {
		Usuario usuario = new Usuario();
		usuario.setUsuarioClave(usuarioDto.getClave());
		usuarioRepository.saveAndFlush(usuario);
	}

	@Override
	public List<UsuarioDtoResponse> listarUsuario() {
		List<Usuario> listUsuarios = new ArrayList<>();
		List<UsuarioDtoResponse> listUsuariosDto = new ArrayList<>();
		UsuarioDtoResponse usuarioDto = null;
		listUsuarios = usuarioRepository.findAll();		
		for(Usuario usuario:listUsuarios) {
			usuarioDto = new UsuarioDtoResponse();
			usuarioDto.setCorreo(usuario.getUsuarioCorreo());
			usuarioDto.setClave(usuario.getUsuarioClave());
			usuarioDto.setActivo(usuario.isActivo());
			listUsuariosDto.add(usuarioDto);
		}
		
		return listUsuariosDto;
	}

	@Override
	public <T> List<T> listarUsuariosPorUsuarioCorreo(String usuarioCorreo, Class<T> clase) throws Exception {
		return  usuarioRepository.listarUsuariosPorUsuarioCorreo(usuarioCorreo,clase);
	}

}
