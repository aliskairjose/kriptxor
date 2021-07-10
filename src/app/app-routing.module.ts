import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import( './folder/folder.module' ).then( m => m.FolderPageModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import( './dashboard/dashboard.module' ).then( m => m.DashboardPageModule )
  },
  {
    path: 'login',
    loadChildren: () => import( './login/login.module' ).then( m => m.LoginPageModule )

  },
  {
    path: 'campaigns',
    loadChildren: () => import('./campaigns/campaigns.module').then( m => m.CampaignsPageModule)
  },
  {
    path: 'campaign',
    loadChildren: () => import('./campaign/campaign.module').then( m => m.CampaignPageModule)
  },  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  }

];

@NgModule( {
  imports: [
    RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules } )
  ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
