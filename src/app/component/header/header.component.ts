import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

 constructor( private router: Router ) { }
 buscarLibro( termino: string ) {
  console.log(termino);
  this.router.navigate( ['/buscar', termino]);
}
procesarTraerPlaceHolder(event) {
  console.log(event);

}

}
