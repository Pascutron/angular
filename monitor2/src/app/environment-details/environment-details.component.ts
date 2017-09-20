import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Environment } from '../environment';
import { EnvironmentServiceService } from '../environment-service.service';

@Component({
  selector: 'app-environment-details',
  templateUrl: './environment-details.component.html',
  styles: []
})
export class EnvironmentDetailsComponent implements OnInit, OnDestroy {

  environment: Environment;
  sub: any;

  constructor(private route:ActivatedRoute,
              private environmentService:EnvironmentServiceService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        this.environment = this.environmentService.get(id);
    })
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  goToEnvironmentList(){
    window.history.back();
  }

  saveNewBranch(){
    this.environmentService.save(this.environment);
  }


}
