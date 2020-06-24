import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  // http://localhost:4200/accounts will show frontend page -- Developed by Sudheer
  {
    path: 'accounts',
    component: AccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
