import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISchools } from '../models/schools.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EscolasService {
  private apiUrl = 'http://localhost:3000/escolas'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ISchools[]> {
    return this.http.get<ISchools[]>(`${this.apiUrl}`);
  }

}
