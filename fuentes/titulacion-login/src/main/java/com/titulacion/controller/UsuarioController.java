package com.titulacion.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.titulacion.dto.UsuarioDtoRequest;
import com.titulacion.dto.UsuarioDtoResponse;
import com.titulacion.model.Usuario;
import com.titulacion.service.UsuarioService;
import com.titulacion.type.TipoRespuestaWeb;
import com.titulacion.bean.*;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
	Logger LOGGER = LoggerFactory.getLogger(UsuarioController.class);
	
	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(path = "/guardar", method = RequestMethod.POST)
	public ResponseEntity<Void> guardar(@RequestBody UsuarioDtoRequest usuarioDto) {
		usuarioService.guardarUsuario(usuarioDto);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	
	@RequestMapping(path = "/listar", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<List<UsuarioDtoResponse>> listar() {
		return new ResponseEntity<List<UsuarioDtoResponse>>( usuarioService.listarUsuario(),HttpStatus.OK);
	}
	
	@PostMapping(value = "/obtenerUsuariosPorCorreo/")
	public ResponseEntity<?> obtenerUsuarioPorCorreo(@RequestBody UsuarioDtoRequest usuarioDto) throws Exception{
		 RespuestaWeb respuestaWeb = new RespuestaWeb();
		 respuestaWeb.setTipoRespuesta(TipoRespuestaWeb.CORRECTA);
		 List<Usuario> user = new ArrayList<>();
		 user = usuarioService.listarUsuariosPorUsuarioCorreo(usuarioDto.getCorreo(), Usuario.class);
		 
		 
		 //List<UsuarioDtoResponse> usuario = usuarioService.listarUsuariosPorUsuarioCorreo(usuarioDto.getCorreo(), UsuarioDtoResponse.class);
		 respuestaWeb.getParametros().put("usuario", user);
		 return ResponseEntity.status(HttpStatus.OK).body(respuestaWeb);
	}
	
}
