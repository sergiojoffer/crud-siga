import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, NonNullableFormBuilder} from "@angular/forms";
import {CursosService} from "../services/cursos.service";
import { Curso } from "../model/curso";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']
  });


  constructor(private formBuilder: NonNullableFormBuilder, private service: CursosService
              ) {}

  ngOnInit(): void {
  }

 onSubmit() {
  //
   this.service.save(this.form.value).subscribe(result => console.log(result));
  //console.log(this.form.value);
 }

 onCancel() {

 }
}
