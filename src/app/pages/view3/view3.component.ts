import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-view3',
  standalone: true,
  imports: [RouterOutlet, MatProgressBarModule, MatIconModule, MatExpansionModule],
  templateUrl: './view3.component.html',
  styleUrl: './view3.component.scss'
})
export class View3Component {

  isMenuVisible: boolean = false;
  panelOpenState: boolean = false;

  showAlert() {
    alert('Na resztę brakło czasu 😃');
  }
}
