import { Component, OnInit } from '@angular/core';
import { Environment } from '../environment';
import { EnvironmentServiceService } from '../environment-service.service';

@Component({
  selector: 'app-environment-list',
  template: `
    <ul>
      <li *ngFor="let environment of targetEnvironment">
        <a [routerLink]="['/environments', environment.id]">
          {{environment.name}}
        </a>
      </li>
    </ul>

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
