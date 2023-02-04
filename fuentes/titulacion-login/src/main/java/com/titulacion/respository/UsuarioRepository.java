package com.titulacion.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.titulacion.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String>{
	@Query(value = "SELECT usuario_correo, usuario_clave FROM usuario WHERE usuario_correo = :usuario_correo", nativeQuery=true)
	<T> List<T> listarUsuariosPorUsuarioCorreo(@Param("usuario_correo") String usuarioCorreo, Class<T> clase)throws Exception;
}
