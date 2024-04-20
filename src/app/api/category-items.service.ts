import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryItem } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CategoryItemService {
  private readonly http = inject(HttpClient);
  private apiUrl =
    'https://team-02.forge-24.rnd.synergy.codes/api/category-items';

  getCategoryItems(): Observable<CategoryItem[]> {
    return this.http.get<CategoryItem[]>(this.apiUrl);
  }

  getCategoryItem(categoryItemId: number): Observable<CategoryItem> {
    const url = `${this.apiUrl}/${categoryItemId}`;
    return this.http.get<CategoryItem>(url);
  }

  addCategoryItem(categoryItem: CategoryItem): Observable<CategoryItem> {
    return this.http.post<CategoryItem>(this.apiUrl, categoryItem);
  }

  editCategoryItem(
    categoryItemId: number,
    CategoryItem: CategoryItem
  ): Observable<CategoryItem> {
    const url = `${this.apiUrl}/${categoryItemId}`;
    return this.http.patch<CategoryItem>(url, CategoryItem);
  }

  deleteCategoryItem(categoryItemId: number): Observable<CategoryItem> {
    const url = `${this.apiUrl}/${categoryItemId}`;
    return this.http.delete<CategoryItem>(url);
  }
}
