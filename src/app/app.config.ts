import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Zone.js optimization
    provideRouter(routes), // Routing configuration
    provideAnimationsAsync(), // Animations support
    providePrimeNG({ // PrimeNG configuration
      theme: {
        preset: Aura // Use Aura theme
      }
    })
  ]
};