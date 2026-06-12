import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Centralized API URL configuration.
 *
 * HOW IT WORKS:
 * La URL base ahora se extrae dinámicamente de environment.ts,
 * el cual es generado por set-env.js utilizando el archivo .env de la raíz.
 */

@Injectable({
  providedIn: 'root'
})
export class ApiGlobalService {

  get baseUrl(): string {
    // Si necesitas sobreescribir temporalmente desde localStorage (útil para debug):
    const localUrl = localStorage.getItem('BACKEND_URL');
    if (localUrl) return localUrl;
    
    return environment.apiUrl;
  }

  get apiUrl(): string {
    return `${this.baseUrl}/api`;
  }

  get wsUrl(): string {
    return `${this.baseUrl}/ws-bpmn`;
  }

  constructor() { }

  /**
   * Genera una URL completa para un endpoint específico
   * @param endpoint El endpoint (ej. '/projects' o 'projects')
   */
  getEndpointUrl(endpoint: string): string {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${this.apiUrl}${cleanEndpoint}`;
  }
}
