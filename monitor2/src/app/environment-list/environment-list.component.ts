import { Component, OnInit } from '@angular/core';
import { Environment } from '../environment';
import { EnvironmentServiceService } from '../environment-service.service';

@Component({
  selector: 'app-environment-list',
  template: `
  <div class="grid grid-pad">
    <a *ngFor="let environment of targetEnvironment" [routerLink]="['/environments', environment.id]" class="col-1-4">
      <div class="module">
        {{environment.name}}
      </div>
    </a>
  </div>
  `,
  styleUrls: ['./environment-list.component.css']
})
export class EnvironmentListComponent implements OnInit {

  targetEnvironment: Environment[] = [];

  constructor(private environmentService: EnvironmentServiceService) {}

  ngOnInit() {
    this.targetEnvironment = this.environmentService.getAll();
  }
}
