import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss',
})
export class ModalContentComponent {
  constructor(private router: Router) {}

  newBudget() {
    this.router.navigate(['/module1']);
  }

  usePreviousBudget() {
    this.router.navigate(['/module2']);
  }

  
  // closeModal() {
  //  this.dialogRef.close();
  // }
}
