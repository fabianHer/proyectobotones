import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PeliculasService, Pelicula } from '../../servicios/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  tipoBusqueda="pelicula";
  placeholder="Buscar Peliculas";
  peliculas: Pelicula[] = [];
  nombreValue = "";
  descValue = "";
  constructor( private servicepelicula: PeliculasService, private activaruta: ActivatedRoute ) { }

  ngOnInit() {
    this.peliculas = this.servicepelicula.getpeliculas();
    console.log(this.peliculas);
  }
  comprar(event: any) {
    console.log(event);
    this.nombreValue = event.titulo;
    this.descValue = event.descripcion;
  }
}
