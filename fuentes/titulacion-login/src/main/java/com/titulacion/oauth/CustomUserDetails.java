package com.titulacion.oauth;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.titulacion.model.Usuario;

public class CustomUserDetails implements UserDetails{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Usuario user;
	
	  public CustomUserDetails(Usuario user) {
	        this.user = user;
	    }
	  
	    @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	        return Collections.singletonList(new SimpleGrantedAuthority(user.getUsuarioRol()));
	    }

	    @Override
	    public String getPassword() {
	        return user.getUsuarioClave();
	    }

	    @Override
	    public String getUsername() {
	        return user.getUsuarioCorreo();
	    }

	    @Override
	    public boolean isAccountNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isAccountNonLocked() {
	        return true;
	    }

	    @Override
	    public boolean isCredentialsNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isEnabled() {
	        return true;
	    }
}
