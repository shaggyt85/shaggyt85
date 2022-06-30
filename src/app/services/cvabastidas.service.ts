import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvabastidasService {

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  servicios: any[] = [];
  /* blog: any[] = []; */

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    /* this.CargarBlog(); */
    this.CargarServicios();
  }

  private CargarProfesional(){
    this.http.get('https://rmedinacv-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;        
    });
  }

  private CargarEducacion(){
    this.http.get('https://rmedinacv-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
        this.educacion = resp;        
    });
  }

  private CargarTestimonio(){
    this.http.get('https://rmedinacv-default-rtdb.firebaseio.com/Testimonio.json')
      .subscribe((resp: any) => {
        this.testimonio = resp;        
    });
  }

  private CargarExperiencia(){
    this.http.get('https://rmedinacv-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any) => {
        this.experiencia = resp;        
    });
  }

  /* private CargarBlog(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
      .subscribe((resp: any) => {
        this.blog = resp;
        console.log(resp);
    });
  } */

  private CargarServicios(){
    this.http.get('https://rmedinacv-default-rtdb.firebaseio.com/Servicios.json')
      .subscribe((resp: any) => {
        this.servicios = resp;        
    });
  }
}
