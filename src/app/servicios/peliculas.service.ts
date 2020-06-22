import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
  {
   id: '1',
   titulo: 'Buscando a Nemo',
   descripcion: 'Marlin es un pez payaso que se acaba de trasladar a vivir con su esposa a un lugar tranquilo cercano a la gran Barrera del Coral',
   publicacion: '2003',
   tipo: 'pelicula'
  },
  {
    id: '2',
    titulo: 'Ciudad de Dios',
    descripcion: 'Muscapé tiene 11 años y vive en Ciudad de Dios, un suburbio de Río de Janeiro. A pesar que la vida en este barrio está dominada por robos, peleas y enfrentamientos diarios con la policía, Buscapé prefiere quedarse al margen.',
    publicacion: '2002',
    tipo: 'pelicula'
  },
  {
    id: '3',
    titulo: 'Hable con Ella',
    descripcion: '"Hable con ella" es la historia de amistad de dos hombres enamorados de dos mujeres que están en coma profundo por diversas razones.',
    publicacion: '2002',
    tipo: 'pelicula'
  },
  {
    id: '4',
    titulo: 'El Señor De Los Anillos',
    descripcion: 'En el anterior episodio dejamos a la Comunidad del Anillo desmembrada en su intento de cumplir la misión que se les encomendó. Cada uno de sus miembros intenta hacer frente a su destino, que no es otro que el de salvar a la Tierra Media de las fuerzas del Señor Oscuro.',
    publicacion: '2002-2003',
    tipo: 'pelicula'
  },
  {
    id: '5',
    titulo: 'Kandahar',
    descripcion: 'Nafas es una joven periodista afgana refugiada en Canadá. Su hermana pequeña vive en Afganistán y le manda una carta desesperada diciéndole que ha decidido quitarse la vida antes del eclipse de sol que se acerca. Nafas huyó de su país durante la guerra civil talibán.',
    publicacion: '2001',
    tipo: 'pelicula'
  },
  {
    id: '6',
    titulo: 'La Mirada De Ulises',
    descripcion: 'Un director de cine de origen griego vuelve a su país para presentar su última película. Pero sus intenciones son las de recuperar una película de los hermanos Manakis, pioneros del cine en Grecia. Esto le llevará aun viaje iniciático por los Balcanes.',
    publicacion: '1995',
    tipo: 'pelicula'
  }
  ];

  constructor() { }

 getpeliculas() {
    return this.peliculas;
  }
  buscarPeliculas( termino: string ): Pelicula[] {
   console.log(termino);
    let heroesArr: Pelicula[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.peliculas.length; i ++ ) {

      let heroe = this.peliculas[i];
      let nombre = heroe.titulo.toLowerCase();

      if (nombre.indexOf( termino ) >= 0 ) {
          heroe.idx = i;
          heroesArr.push( heroe );
      }
    }
    console.log(heroesArr);
  return heroesArr;
  }
}
export class Pelicula {
  id: string;
  titulo: string;
  descripcion: string;
  publicacion: string;
  tipo: string;
  idx?: number;
}