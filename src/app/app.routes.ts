import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ListaLibrosComponent } from './component/lista-libros/lista-libros.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { LoginGuardGuard } from '../app/guards/login-guard.guard';


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'listaLibros', component: ListaLibrosComponent, canActivate: [LoginGuardGuard] },
    { path: 'peliculas', component: PeliculasComponent, canActivate: [LoginGuardGuard] },
    { path: 'buscar/:parametroBuscar/:tipoBusqueda', component: BuscadorComponent },
    { path: 'header', component: HeaderComponent },
    { path: '**' , pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash: true});
