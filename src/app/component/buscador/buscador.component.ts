import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../../servicios/libros.service';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  libros: any[] = [];
  peliculas: any[] = [];
  termino: string;
  tipoBusqueda: any;
  placeholder: any;
  constructor( private libroservice: LibrosService, private peliculasService: PeliculasService, private activaruta: ActivatedRoute ) { }

  ngOnInit() {
      this.activaruta.params.subscribe( params => {
      this.termino = params['parametroBuscar'];
      this.tipoBusqueda =params['tipoBusqueda'];
      
      if(this.tipoBusqueda=="libro"){
        console.log(this.termino + this.tipoBusqueda);
        this.placeholder ="Buscar Libro";
        this.libros = this.libroservice.buscarLibros( params['parametroBuscar'] );
      }else{
        this.placeholder ="Buscar Pelicula";
        this.peliculas = this.peliculasService.buscarPeliculas(params['parametroBuscar']);
      }
      //console.log(this.libros);
     })
    }

}
