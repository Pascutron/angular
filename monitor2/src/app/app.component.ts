import { Component } from '@angular/core';
import { EnvironmentServiceService } from './environment-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnvironmentServiceService]
})
export class AppComponent {
  title = 'Environment Monitor 3000';
}
