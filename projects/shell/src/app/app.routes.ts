import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module'
      }).then(m => m.FlightsModule)
  },
  {
    path: 'tatto',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        remoteName: 'tatto',
        exposedModule: './Module'
      }).then(m => m.TattoModule)
  },
  {
    path: 'app',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './AppComponent'
      }).then(m => m.AppComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'login',
        exposedModule: './LoginComponent'
      }).then(m => m.LoginComponent)
  }
];
