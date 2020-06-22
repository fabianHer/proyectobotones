import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibrosService, Heroe } from '../../servicios/libros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit  {
  tipoBusqueda="libro";
  placeholder="Buscar Libros";
  libros: Heroe[] = [];
  valor = 'Fabian';
  inicio = 'dos';
  descValue = '';
  nombreValue = '';
  constructor( private activatedRoute: ActivatedRoute, private traerLibros: LibrosService) {
    }

   ngOnInit() {
    this.libros = this.traerLibros.getHeroes();
    console.log(this.libros);

    setTimeout(() => {
      this.valor = 'nuevo valor';
    }, 5000);
  }

  comprar(event: any) {
    console.log(event);
    this.nombreValue = event.nombre;
    this.descValue = event.bio;
  }
}
