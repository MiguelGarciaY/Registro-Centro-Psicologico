import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/comun/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  
  public usuarios: Usuario[];
  indice:number;
  
  public usuarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      //apellidos: ['', [Validators.required]],
      nombres: ['', [Validators.required, Validators.pattern('^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+\\s{0,})*$')]],
      correo: ['', [Validators.required, Validators.pattern("^(([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})[,;]?\\s*){1,5}$")]],
      roles: ['', [Validators.required]],
      usuario: [''],
      telefono: [''],
      cargo: [''],
      estado: [true],
      clave: [''],
      sedesSelect: [true, ],
      sedesAsignadas: [null, ],
  });

  this.indice = this.route.snapshot.params['id'];
  let usuario: Usuario;
  this.listarUsuarios();
  }

  actualizar(){

  }

  guardar() {
    console.log(this.usuarioForm.value);
  }

  listarUsuarios(){
    this.usuarioService.listarUsuarios().subscribe(data => {
      console.log(data)
      this.usuarios = data      
      this.usuarioForm.get('usuario').setValue(this.usuarios[this.indice].correo);
      this.usuarioForm.get('clave').setValue(this.usuarios[this.indice].clave);
      this.usuarioForm.get('estado').setValue(this.usuarios[this.indice].activo);

    })
  }
}
