import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url='https://identitytoolkit.googleapis.com/v1';
  private key='AIzaSyDTqL9IULMU8ix8MRzdF1MawGwtcf6Jxq8';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
   }

  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  crearUsuario( usuario: UsuarioModel) {    
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
      return this.http.post(`${ this.url }/accounts:signUp?key=${ this.key }`,
      authData
    ).pipe(
      map( respuesta => {
        this.guardarToken( respuesta['idToken']);
        return respuesta;
      })
    );   
  
  }
  login(usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
     return this.http.post(`${ this.url }/accounts:signInWithPassword?key=${ this.key }`,
     authData
     ).pipe(
       map( respuesta =>{
         this.guardarToken( respuesta['idToken'] );
         return respuesta;
       })
     );
  }
  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );
    localStorage.setItem('expira', hoy.getTime().toString());
  }  
  leerToken() {
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }
  estaAutenticado(): boolean {
    if(this.userToken.length < 2 ) {
      return false;
    }
    const expira = Number( localStorage.getItem('expira') );
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }
  }
  logout(){
    localStorage.removeItem('token');
  }
}
