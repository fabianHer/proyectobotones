import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../servicios/libros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  libros: any[] = [];
  termino: string;
  constructor( private libroservice: LibrosService, private activaruta: ActivatedRoute ) { }

  ngOnInit() {
      this.activaruta.params.subscribe( params => {
      this.termino = params['libro'];
      this.libros = this.libroservice.buscarLibros( params['libro'] );
      console.log(this.libros);
     })
    }

}
