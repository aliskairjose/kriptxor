import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'documents',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import( './folder/folder.module' ).then( ( m ) => m.FolderPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import( './dashboard/dashboard.module' ).then( ( m ) => m.DashboardPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import( './login/login.module' ).then( ( m ) => m.LoginPageModule ),
  },
  {
    path: 'campaigns',
    loadChildren: () =>
      import( './campaigns/campaigns.module' ).then( ( m ) => m.CampaignsPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'client/:id',
    loadChildren: () =>
      import( './client/client.module' ).then( ( m ) => m.ClientPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'documents/:id',
    loadChildren: () =>
      import( './documents/documents.module' ).then( ( m ) => m.DocumentsPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'notes/:id',
    loadChildren: () =>
      import( './notes/notes.module' ).then( ( m ) => m.NotesPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'schedule/:id',
    loadChildren: () =>
      import( './schedule/schedule.module' ).then( ( m ) => m.SchedulePageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import( './calendar/calendar.module' ).then( ( m ) => m.CalendarPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'clients',
    loadChildren: () =>
      import( './clients/clients.module' ).then( ( m ) => m.ClientsPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'market-rates/:id',
    loadChildren: () => import( './market-rates/market-rates.module' ).then( m => m.MarketRatesPageModule ),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'seeker',
    loadChildren: () => import( './seeker/seeker.module' ).then( m => m.SeekerPageModule ),
    canActivate: [ AuthGuardService ]
  }

];
@NgModule( {
  imports: [
    RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules } ),
  ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule { }
