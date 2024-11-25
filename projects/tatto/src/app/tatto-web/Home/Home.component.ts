import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FirstSectionComponent } from '../components/main/first-section/first-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HeaderComponent, FooterComponent,FirstSectionComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss'
})
export class homeComponent {

}
