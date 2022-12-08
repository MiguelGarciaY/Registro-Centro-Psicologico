package com.titulacion.bean;

import static java.text.MessageFormat.format;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import com.titulacion.type.TipoRespuestaWeb;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class RespuestaWeb implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private int codigoRespuesta;
    private String mensajeRespuesta;
    private Map<String, Object> parametros;
    
    public RespuestaWeb() {
        parametros = new HashMap<String, Object>();
    }
    
    public Map<String, Object> getParametros() {
        if(parametros==null){
            parametros = new HashMap<String, Object>();
        }
        return parametros;
    }
    
    public void setTipoRespuesta(TipoRespuestaWeb tipoRespuestaWeb) {
        this.codigoRespuesta = tipoRespuestaWeb.getCodigo();
        this.mensajeRespuesta = tipoRespuestaWeb.getMensaje();
    }
    
    public void setTipoRespuesta(TipoRespuestaWeb tipoRespuestaWeb, String idError) {
        this.codigoRespuesta = tipoRespuestaWeb.getCodigo();
        this.mensajeRespuesta = format(tipoRespuestaWeb.getMensaje(), idError);
    }
}
