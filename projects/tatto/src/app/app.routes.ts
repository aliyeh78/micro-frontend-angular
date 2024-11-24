import { Routes } from '@angular/router';
import { homeComponent } from './tatto-web/Home/Home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: homeComponent, // Use the standalone component directly
  },

];
