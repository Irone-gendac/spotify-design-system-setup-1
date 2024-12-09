import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-primeng-library-playground',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './primeng-library-playground.component.html',
  styleUrl: './primeng-library-playground.component.scss'
})
export class PrimengLibraryPlaygroundComponent {
  items: any[] | undefined;

  ngOnInit() {
      this.items = [
        {
            label: 'Refresh',
        },
        {
            label: 'Export',
        }
    ]
  }
}
