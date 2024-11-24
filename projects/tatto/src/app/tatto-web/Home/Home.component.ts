import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss'
})
export class homeComponent {

}
