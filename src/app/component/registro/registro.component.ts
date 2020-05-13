import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme: false;

  constructor( private newUser: LoginService, private route: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel;
  }

  onSubmit(form: NgForm) {
    if(form.invalid){return;}
    console.log(form);
    console.log("aqui llegamos");
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor...'
    });
    Swal.showLoading();    
    this.newUser.crearUsuario(this.usuario).subscribe(respuesta => {
      Swal.close();
      if(this.recordarme){
         localStorage.setItem('email',this.usuario.email);
      }
      this.route.navigateByUrl('/login');
    }, (err) => {
      Swal.fire({
      icon: 'error',
      title: 'Error de creación de usuario',
      text: err.error.error.message
    });    
  });
  }

}
