import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly http = inject(HttpClient);
  private apiUrl = 'https://team-02.forge-24.rnd.synergy.codes/api/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(categotyId: number): Observable<Category> {
    const url = `${this.apiUrl}/${categotyId}`;
    return this.http.get<Category>(url);
  }

  addCategory(category: Category): Observable<Category> {
    console.log(category);
    return this.http.post<Category>(this.apiUrl, category);
  }

  editCategory(categoryId: number, category: Category): Observable<Category> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.patch<Category>(url, categoryId);
  }

  deleteCategory(categoryId: number): Observable<Category> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.delete<Category>(url);
  }
}
