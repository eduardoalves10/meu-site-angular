import { Component } from '@angular/core';
import { Formulario } from "./formulario/formulario";

@Component({
  selector: 'app-exemplo-form',
  imports: [Formulario],
  templateUrl: './exemplo-form.html',
  styleUrl: './exemplo-form.css',
})
export class ExemploForm {}
