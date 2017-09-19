import { Routes, RouterModule } from '@angular/router';
import { EnvironmentListComponent } from './environment-list/environment-list.component';
import { EnvironmentDetailsComponent } from './environment-details/environment-details.component';

const routes: Routes = [
  {
    path: 'environments',
    component: EnvironmentListComponent,
  },
  {
    path: 'environments/:id',
    component: EnvironmentDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/environments',
    pathMatch: 'full',
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
