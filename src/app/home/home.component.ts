import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { IntegrationsService } from '../api/integrations.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Integration } from '../../types';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    ModalContentComponent,
    MatCardModule,
    AsyncPipe,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private integrationsService = inject(IntegrationsService);
  private router = inject(Router);

  integrations$: Observable<Integration[]> =
    this.integrationsService.getIntegrations();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalContentComponent);
  }

  openPrvIntegration(integrationId: number) {
    console.log('Navigating to integration');
    this.router.navigateByUrl('/view3');
  }
}
