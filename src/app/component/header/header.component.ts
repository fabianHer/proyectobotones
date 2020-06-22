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
 crearPelicula = "Crear Pelicula"
 listarLibros = 'Lista Libros';
 peliculas = 'Lista Peliculas';
 placeHolder = 'Buscar';

 @Input('placeholder') placeholder;
 @Input('tipoBusqueda') tipoBusqueda;

 constructor( private router: Router, private loginService: LoginService ) { }
 buscarElemento( termino: string, tipoBusqueda: any ) {
  console.log(termino + tipoBusqueda);
  this.router.navigate( ['/buscar', termino, tipoBusqueda]);
}
procesarTraerPlaceHolder(event) {
  console.log(event);

}
salir(){
 this.loginService.logout();
 this.router.navigateByUrl('/login');
}

}
