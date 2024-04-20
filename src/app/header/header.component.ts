import { Component, Input, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  isVisiable = false;

  ngOnInit(){
    this.router.events
    .pipe(filter(item => item instanceof NavigationEnd))
    .subscribe(() => {
      console.log(this.router.url)
      if(this.router.url=== '/test'){
        this.isVisiable = true;
      }else{
        this.isVisiable = false;
      }
    })

    if(this.activatedRoute.snapshot.routeConfig?.path === 'test'){
      this.isVisiable = true;
    }else{
      this.isVisiable = false;
    }
  }
}
