import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
 title = 'Proyecto Botones';
 listarLibros = 'Lista Libros';
 peliculas = 'Lista Peliculas';
 placeHolder = 'Buscar';

 @Input() placeholderPadre = '';

 constructor( private router: Router, private loginService: LoginService ) { }
 buscarLibro( termino: string ) {
  console.log(termino);
  this.router.navigate( ['/buscar', termino]);
}
procesarTraerPlaceHolder(event) {
  console.log(event);

}
salir(){
 this.loginService.logout();
 this.router.navigateByUrl('/login');
}

}
