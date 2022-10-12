import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ComponentType } from '@angular/cdk/overlay';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;

  displayedColumns = ['name', 'category','actions'];

  constructor(private CursosService: CursosService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.cursos$ = this.CursosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar Cursos.');
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
  ngOnInit(): void {}

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
