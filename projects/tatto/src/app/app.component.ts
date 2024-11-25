import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './tatto-web/components/footer/footer.component';
import { HeaderComponent } from './tatto-web/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule,FooterComponent,HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tatto';
}
