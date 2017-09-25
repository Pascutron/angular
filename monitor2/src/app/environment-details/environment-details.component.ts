import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Environment } from '../environment';
import { EnvironmentServiceService } from '../environment-service.service';
import { UserAccounts } from '../userAccounts';

@Component({
  selector: 'app-environment-details',
  templateUrl: './environment-details.component.html',
  styles: []
})
export class EnvironmentDetailsComponent implements OnInit, OnDestroy {

  environment: Environment;
  targetUsers: UserAccounts[] = [];
  enviromentUsers: UserAccounts[];
  sub: any;


  constructor(private route:ActivatedRoute,
              private environmentService:EnvironmentServiceService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        this.environment = this.environmentService.get(id);
        this.targetUsers = this.environmentService.getUsers();

        var getEnviromentForUsers = this.environment.name;
        var getAllUsers = this.targetUsers;

        //this.environmentUsers = this.getAllUsers.filter( user => user.getEnviromentForUsers === this.getEnviromentForUsers);


        console.log(getAllUsers);
        console.log('EL LENGHT = ' + getAllUsers.length);
        console.log(getEnviromentForUsers);
        console.log(id);
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
