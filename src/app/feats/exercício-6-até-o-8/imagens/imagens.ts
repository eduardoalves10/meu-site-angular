import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-imagens',
  imports: [FormsModule],
  templateUrl: './imagens.html',
  styleUrl: './imagens.css',
})
export class Imagens {
  protected imagens = signal<string>("");
};
