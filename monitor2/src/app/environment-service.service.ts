import { Injectable } from '@angular/core';
import { Environment } from './environment';
import { UserAccounts } from './userAccounts';

let ENVIRONMENTS : Environment[] = [
  {id: 1, name: 'TEST', currentBranch: 'master.QuestForProducts', previousBranch: 'old.test', newBranch: 'null'},
  {id: 2, name: 'FIX', currentBranch: 'Feature.TerritoryManagement', previousBranch: 'old.fix', newBranch: 'null'},
  {id: 3, name: 'UAT', currentBranch:'Feature.NewBackoffice', previousBranch: 'old.uat', newBranch: 'null'},
  {id: 4, name: 'DEMO', currentBranch: 'master.QuestForProducts', previousBranch: 'old.demo', newBranch: 'null'},
  {id: 5, name: 'SLOT01', currentBranch: 'integration', previousBranch: 'old.slot01', newBranch: 'null'}
];

let USERACCOUNTS : UserAccounts[] = [
  {environment: 'TEST', platform: 'Vault', username: 'default.admin', password: 'MegaAdmin2017!'},
  {environment: 'TEST', platform: 'Quest', username: 'default.user', password: '1234qwerASDF!@'},
  {environment: 'UAT', platform: 'Quest', username: 'uat', password: 'uat'}
];

@Injectable()
export class EnvironmentServiceService {

  constructor() { }

  getAll(): Environment[] {
    return ENVIRONMENTS;
  }

  getUsers(): UserAccounts[]{
    return USERACCOUNTS;
  }

  // getUsers(environmentName) {
  //   var wasca : UserAccounts[];
  //   for(let i = 0, i < wasca.length, i ++){
  //     if(environmentName === wasca[i].name){
  //       console.log('environmentName');
  //       console.log('wasca');
  //     };
  //   };
  // }

  get(id: number) : Environment{
    return ENVIRONMENTS.find(e => e.id === id);
  }

  save(environment : Environment){
    console.log(environment.id, '*', environment.name, '*', environment.newBranch, '*', environment.currentBranch);
    if(environment.newBranch != environment.currentBranch){
      environment.previousBranch = environment.currentBranch;
      environment.currentBranch = environment.newBranch;
      alert('Current deployed branch updated. New current branch: ' + environment.currentBranch);
    }
    else{
      alert('ERROR');
    }
  }
}
