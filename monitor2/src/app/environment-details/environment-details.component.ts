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
        this.targetUsers = this.environmentService.getUsers(this.environment.name);

        var enviromentForUsers = this.environment.name;
        var allUsers = this.targetUsers;

        //this.environmentUsers = this.getAllUsers.filter( user => user.getEnviromentForUsers === this.getEnviromentForUsers);
//        var environmentUsers = allUsers.filter(function(x) { return x.environment == enviromentForUsers} );

        console.log(allUsers);
        console.log('EL LENGHT = ' + allUsers.length);
        console.log(enviromentForUsers);
  //      console.log(environmentUsers);
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
