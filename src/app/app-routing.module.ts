import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'documents',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'campaigns',
    loadChildren: () =>
      import('./campaigns/campaigns.module').then((m) => m.CampaignsPageModule),
  },
  {
    path: 'client/:id',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientPageModule),
  },
  {
    path: 'documents/:id',
    loadChildren: () =>
      import('./documents/documents.module').then((m) => m.DocumentsPageModule),
  },
  {
    path: 'notes/:id',
    loadChildren: () =>
      import('./notes/notes.module').then((m) => m.NotesPageModule),
  },
  {
    path: 'schedule/:id',
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.SchedulePageModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarPageModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsPageModule),
  },
  {
    path: 'market-rates',
    loadChildren: () => import( './market-rates/market-rates.module' ).then( m => m.MarketRatesPageModule )
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
