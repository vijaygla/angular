import { Component, signal } from '@angular/core';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';
import { Profile } from '../components/profile/profile';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Abc } from '../components/abc/abc';

@Component({
  selector: 'app-root',
  imports: [Login, Register, Profile, Home, About, Abc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ComponentCreationAngular');
}
