import { Routes } from '@angular/router';

import { ListComponent } from './app.component';
import { AdminComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'admin', component: AdminComponent }
]
