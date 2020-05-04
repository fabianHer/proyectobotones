import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ListaLibrosComponent } from './component/lista-libros/lista-libros.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { LoginComponent } from './component/login/login.component';


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'listaLibros', component: ListaLibrosComponent},
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'buscar/:libro', component: BuscadorComponent },
    { path: 'header', component: HeaderComponent },
    { path: '**' , pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
