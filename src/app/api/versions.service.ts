import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Version } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class VersionsService {
  private readonly http = inject(HttpClient);
  private apiUrl = 'https://team-02.forge-24.rnd.synergy.codes/api/versions';


  getVersions() : Observable<Version[]>{
    return this.http.get<Version[]>(this.apiUrl);
  }

  getVersion(versionId  : number) : Observable<Version>{
    const url = `${this.apiUrl}/${versionId}`
    return this.http.get<Version>(url);
  }

  addVersion(version: Version): Observable<Version> {
    return this.http.post<Version>(this.apiUrl, version);
  }

  editVersion(versionId  : number, Version : Version) : Observable<Version>{
    const url = `${this.apiUrl}/${versionId}`
    return this.http.patch<Version>(url, Version);
  }

  deleteVersion(versionId  : number) : Observable<Version>{
    const url = `${this.apiUrl}/${versionId}`
    return this.http.delete<Version>(url);
  }
  
}
