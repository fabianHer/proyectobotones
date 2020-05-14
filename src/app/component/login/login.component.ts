import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordarme: boolean = false;
  constructor(private userLogin: LoginService, private route: Router ) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }
 login(form: NgForm){
  if(form.invalid){return;}
   Swal.fire({
    allowOutsideClick: false,
    icon: 'info',
    text: 'Espere por Favor...'
  });
  Swal.showLoading();
  this.userLogin.login( this.usuario).subscribe(respuesta => {
  Swal.close();
  if(this.recordarme){
    localStorage.setItem('email', this.usuario.email);
  }
  this.route.navigateByUrl('/peliculas');
  }, (err) => {
    Swal.fire({
    icon: 'error',
    title: 'Error de autenticación',
    text: err.error.error.message
  });
  
});
}
}
