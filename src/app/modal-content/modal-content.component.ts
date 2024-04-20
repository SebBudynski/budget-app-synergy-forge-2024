import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})

export class ModalContentComponent {
  constructor(private router: Router) {}

  newBudget() {
    this.router.navigate(['/module1']);
  }

  usePreviousBudget() {
    this.router.navigate(['/module2']);
  }
}
