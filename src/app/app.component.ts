import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengLibraryPlaygroundComponent } from './primeng-library-playground/primeng-library-playground.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengLibraryPlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
