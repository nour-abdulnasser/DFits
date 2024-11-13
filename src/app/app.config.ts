import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { LoadingInterceptor } from './loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withHashLocation()),
    provideHttpClient(), 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoadingInterceptor, 
      multi: true 
    }
    // Removed provideClientHydration()
  ]
};