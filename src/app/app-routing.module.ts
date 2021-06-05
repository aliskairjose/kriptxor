import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminerComponent } from './pages/adminer/adminer.component';
const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'adminers',
    component: AdminerComponent,
    canActivate: [ AuthGuard ]
  }

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes,{useHash: true} ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
