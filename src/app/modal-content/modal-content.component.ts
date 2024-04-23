import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss',
})
export class ModalContentComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ModalContentComponent>
  ) {}

  newBudget() {
    this.router.navigate(['/create-budget']);
    this.closeModal();
  }

  usePreviousBudget() {
    this.router.navigate(['/module2']);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
