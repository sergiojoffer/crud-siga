import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      //delay(3000),
      tap((cursos) => console.log(cursos))
    );
  }

  save(record: Curso){}
}
