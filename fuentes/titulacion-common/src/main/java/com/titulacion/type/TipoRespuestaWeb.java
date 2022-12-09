package com.titulacion.type;

public enum TipoRespuestaWeb {
    CORRECTA(1, "La acción se ha ejecutado correctamente."),
    ERRORENVIOFALLIDO(2, "Error: No se realizó el envio de mensaje"),
    ERROR(-1, "Ocurrió un error inesperado con ID {0}, por favor informar al área correspondiente.");
    
    private final int codigo;    
    private final String mensaje;
    
    private TipoRespuestaWeb(int codigo, String mensaje) {
        this.codigo = codigo;
        this.mensaje = mensaje;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getMensaje() {
        return mensaje;
    }
}
