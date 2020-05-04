import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PeliculasService, Pelicula } from '../../servicios/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  placeHolder = 'Bucar Peliculas';
  peliculas: Pelicula[] = [];
  constructor( private servicepelicula: PeliculasService, private activaruta: ActivatedRoute ) { }

  ngOnInit() {
    this.peliculas = this.servicepelicula.getpeliculas();
    console.log(this.peliculas);
  }
}
