import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StorageService } from './shared/services/storage.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { TOKEN } from './shared/constants/constants';
import { MenuController } from '@ionic/angular';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ],
} )
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Campañas', url: '/campaigns', icon: 'flag' },
    { title: 'Calendario', url: '/calendar', icon: 'calendar' },
    { title: 'Mis clientes', url: '/clients', icon: 'person' },
    { title: 'Mis clientes', url: '/clients', icon: 'person' },
  ];

  public labels = [];
  url = 'https://grupoglobalelite.com/politicas-bancarias/';

  constructor(
    private router: Router,
    private platform: Platform,
    private storage: StorageService,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  openUrl(): void {
    window.open( this.url, '_system' );
  }

  closeSession(): void {
    localStorage.clear();
    this.menuCtrl.close();
    this.router.navigate( [ '/login' ] );
  }

  private initializeApp(): void {
    this.platform.ready().then( async () => {
      SplashScreen.hide();
      const isLoggedin = await this.storage.get( TOKEN );
      const route = isLoggedin ? '/dashboard' : '/login';
      this.router.navigate( [ route ] );
    } );
  }
}
