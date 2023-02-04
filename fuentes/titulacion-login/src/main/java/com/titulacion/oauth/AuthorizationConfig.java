package com.titulacion.oauth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;

@Configuration
@EnableAuthorizationServer
public class AuthorizationConfig extends AuthorizationServerConfigurerAdapter {
	
	@Autowired
	private AuthenticationManager manager;
	@Autowired
	private TokenStore store; //Aqui se guarda el token generado
	
	@Override //En este metodo se ve las configuraciones de seguridad por el lado del servidor
	public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {  
		// TODO Auto-generated method stub
		super.configure(security);
	}

	@Override //Configuraciones del cliente
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory()
		.withClient("clienteId")
		.secret(new BCryptPasswordEncoder().encode("clienteContraseña"))
		.authorizedGrantTypes("password", "authorization_code", "refresh_token", "implicit") // Roles del token
		.scopes("read", "write", "trust") //Aqui se define para que van a servir los tokens (Leer, Escribir, Invitado)
		.accessTokenValiditySeconds(3600) //Tiempo de vida del token
		.refreshTokenValiditySeconds(7200); //Tiempo de vida del tokenRefresh
		
	}

	@Override //Permitir guardar el token generado previamente en el tokenStore para usarlo mas adelante
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints.tokenStore(store)
		.authenticationManager(manager);
	}
	
}
