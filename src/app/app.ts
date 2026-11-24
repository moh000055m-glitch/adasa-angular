import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './commbonent/navbar/navbar';
import { Home } from './commbonent/home/home';
import { Footer } from './commbonent/footer/footer';

@Component({
  imports: [RouterOutlet, Navbar, Home, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('adasa');
}
