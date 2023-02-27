export class Usuario{
    usuario: string="";
    contraseña: string="";
    rol:string="";

    constructor(usuario:string,contraseña:string,rol:string){
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.rol=rol;
    }
}