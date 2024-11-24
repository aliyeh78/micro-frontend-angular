import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { TattoModule } from './app/tatto-web/tatto.module';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(BrowserAnimationsModule , TattoModule), // Import module here
    provideAnimations(), // Required for PrimeNG animations
    // Additional providers if PrimeNG services are used
  ],
})
  .catch((err) => console.error(err));
