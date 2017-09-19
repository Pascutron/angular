import { Injectable } from '@angular/core';
import { Environment } from './environment'

const ENVIRONMENTS : Environment[] = [
  {id: 1, name: 'TEST', currentBranch: 'master.QuestForProducts', previousBranch: 'old.test'},
  {id: 2, name: 'FIX', currentBranch: 'Feature.TerritoryManagement', previousBranch: 'old.fix'}
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
}
