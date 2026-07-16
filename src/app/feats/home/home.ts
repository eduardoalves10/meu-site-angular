import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Main, Footer],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {}
