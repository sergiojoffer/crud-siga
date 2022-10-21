import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
} from '@angular/forms';
import { CursosService } from '../services/cursos.service';
import { Curso } from '../model/curso';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    //
    this.service
      .save(this.form.value)
      .subscribe((result) => console.log(result), error => console.log(error));
    //console.log(this.form.value);
  }

  onCancel() {}
}
