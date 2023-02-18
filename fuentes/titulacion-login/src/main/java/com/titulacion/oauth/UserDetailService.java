package com.titulacion.oauth;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.titulacion.dto.UsuarioDtoResponse;
import com.titulacion.model.Usuario;
import com.titulacion.respository.UsuarioRepository;

@Service
public class UserDetailService implements UserDetailsService{
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = new Usuario();
		try {
			usuario= usuarioRepository.buscarUsuarioPorUsuarioCorreo(username);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error en el metodo buscarUsuarioPorUsuarioCorreo: "+e);
		}
		if(usuario.getUsuarioCorreo().equals(username)) {
			return new User(usuario.getUsuarioCorreo(), new BCryptPasswordEncoder().encode(usuario.getUsuarioClave()), new ArrayList<>());			
		}else
			throw new UsernameNotFoundException("Usuario no existe "+ username);
	}
}
