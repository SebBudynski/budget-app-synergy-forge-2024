import { Integration } from './../../types/integration';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class IntegrationsService {
  private readonly http = inject(HttpClient);
  private apiUrl = 'https://team-02.forge-24.rnd.synergy.codes/api/integrations';


  getIntegrations() : Observable<Integration[]>{
    return this.http.get<Integration[]>(this.apiUrl);
  }

  getIntegration(integrationId  : number) : Observable<Integration>{
    const url = `${this.apiUrl}/${integrationId}`
    return this.http.get<Integration>(url);
  }

  addIntegration(integration: Integration): Observable<Integration> {
    return this.http.post<Integration>(this.apiUrl, integration);
  }

  editIntegration(integrationId  : number, integration : Integration) : Observable<Integration>{
    const url = `${this.apiUrl}/${integrationId}`
    return this.http.patch<Integration>(url, integration);
  }

  deleteIntegration(integrationId  : number) : Observable<Integration>{
    const url = `${this.apiUrl}/${integrationId}`
    return this.http.delete<Integration>(url);
  }

}
