import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Observable } from 'rxjs';
import { Dinosaurio } from './dinosaurio';

@Injectable({
  providedIn: 'root'
})
export class DinosaurioService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getDinosaurios(): Observable<Dinosaurio[]>{
  return this.http.get<Dinosaurio[]>(this.apiUrl);
}

}
