import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<string> {
    return this.http.get<{value: string}>(this.apiUrl).pipe(
      map((response) => response.value),
      catchError(err => {
        alert("Erreur !")
        return of()
      })
    )
  }
}
