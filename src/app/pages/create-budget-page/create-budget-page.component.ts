import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryItem } from '../../../types';
import { CategoryItemService } from '../../api/category-items.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-create-budget-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './create-budget-page.component.html',
  styleUrl: './create-budget-page.component.scss',
})
export class CreateBudgetPageComponent {
  private readonly categoriesSerivce = inject(CategoryItemService);
  form!: FormGroup;
  addCategoryForm!: FormGroup;
  categories$: Observable<CategoryItem[]> =
    this.categoriesSerivce.getCategoryItems();
  showAddCategoryForm: boolean = false;

  ngOnInit(): void {
    this.createForms();
  }

  private createForms(): void {
    this.form = new FormGroup({
      integrationName: new FormControl(null, Validators.required),
      budgetName: new FormControl(null, Validators.required),
      plannedBudget: new FormControl(null, Validators.required),
      numPeople: new FormControl(null, Validators.required),
    });

    this.addCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
  }

  handleSwitchShowAddCategoryForm(): void {
    this.showAddCategoryForm = !this.showAddCategoryForm;
  }

  handleSubmitAddCategoryForm(): void {
    this.categoriesSerivce.addCategoryItem(this.addCategoryForm.value);
  }
}
