import { Injectable } from '@angular/core';
import { Environment } from './environment'

let ENVIRONMENTS : Environment[] = [
  {id: 1, name: 'TEST', currentBranch: 'master.QuestForProducts', previousBranch: 'old.test', newBranch: 'null'},
  {id: 2, name: 'FIX', currentBranch: 'Feature.TerritoryManagement', previousBranch: 'old.fix', newBranch: 'null'},
  {id: 3, name: 'UAT', currentBranch:'Feature.NewBackoffice', previousBranch: 'old.uat', newBranch: 'null'},
  {id: 4, name: 'DEMO', currentBranch: 'master.QuestForProducts', previousBranch: 'old.demo', newBranch: 'null'},
  {id: 5, name: 'SLOT01', currentBranch: 'integration', previousBranch: 'old.slot01', newBranch: 'null'}
];

@Injectable()
export class EnvironmentServiceService {

  constructor() { }

  getAll(): Environment[] {
    return ENVIRONMENTS;
  }

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
