export interface Usuario{
    correo: string;
    clave: string;
    rol:string;
    activo:boolean;

    /*constructor(usuario:string,contraseña:string,rol:string,estado:boolean){
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.rol=rol;
        this.estado=estado;
    }*/
}