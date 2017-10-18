import { Component, OnInit } from '@angular/core';
import {Forms} from './../forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor() { }

  ngOnInit() { }

  assuntos = ['Dúvidas', 'Produtos', 'Reclamações', 'Elogios'];

    model = new Forms(18, '', '', this.assuntos[2], '', '')

    submitted = false;

    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.model); }

}
