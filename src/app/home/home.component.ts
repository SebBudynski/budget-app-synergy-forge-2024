import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    ModalContentComponent,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = [
    { year: '2015', imageUrl: 'https://picsum.photos/200/300' },
    { year: '2017', imageUrl: 'https://picsum.photos/200/300' },
    { year: '2018', imageUrl: 'https://picsum.photos/200/300' },
    { year: '2021', imageUrl: 'https://picsum.photos/200/300' },
    { year: '2022', imageUrl: 'https://picsum.photos/200/300' },
    { year: '+', imageUrl: '' },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalContentComponent);
  }
}
