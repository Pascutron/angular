import { Injectable } from '@angular/core';
import { Environment } from './environment'

const ENVIRONMENTS : Environment[] = [
  {id: 1, name: 'TEST', currentBranch: 'master.QuestForProducts', previousBranch: 'old.test', newBranch: 'null'},
  {id: 2, name: 'FIX', currentBranch: 'Feature.TerritoryManagement', previousBranch: 'old.fix', newBranch: 'null'}
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
      let originalEnvironment = ENVIRONMENTS.find(e => e.id === environment.id);
      if(originalEnvironment) Object.assign(originalEnvironment, environment);
      console.log(originalEnvironment.id, '*', originalEnvironment.name, '*', originalEnvironment.newBranch, '*', originalEnvironment.currentBranch);
      alert('Current deployed branch updated.');
    }
    else{
      alert('ERROR');
    }
  }
}
