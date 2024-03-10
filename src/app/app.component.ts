import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavigationBarComponent } from './ui/navigation-bar/navigation-bar.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavigationBarComponent],
  selector: 'angular-crud-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
