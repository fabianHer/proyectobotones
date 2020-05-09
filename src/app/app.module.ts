import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListaLibrosComponent } from './component/lista-libros/lista-libros.component';
import { APP_ROUTING } from './app.routes';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { LibrosService } from './servicios/libros.service';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaLibrosComponent,
    PeliculasComponent,
    BuscadorComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
