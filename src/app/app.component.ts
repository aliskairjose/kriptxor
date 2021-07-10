import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StorageService } from './shared/services/storage.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { TOKEN } from './shared/constants/constants';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ],
} )
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/dashboard', icon: 'home' },
    { title: 'Campañas', url: '/campaigns', icon: 'flag' },
    { title: 'Campaña', url: '/campaign', icon: 'flag' },
    { title: 'Cliente', url: '/client', icon: 'flag' },
    { title: 'Documentos', url: '/documents', icon: 'flag' },
    { title: 'Outbox', url: '/documents', icon: 'paper-plane' },
    { title: 'Favorites', url: '/campaign', icon: 'heart' },
    { title: 'Archived', url: '/notes', icon: 'archive' },
    { title: 'Trash', url: '/schedule', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [ 'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders' ];

  constructor(
    private router: Router,
    private platform: Platform,
    private storage: StorageService,
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then( async () => {
      SplashScreen.hide();
      const isLoggedin = await this.storage.get( TOKEN );
      const route = isLoggedin ? '/documents' : '/login';
      this.router.navigate( [ route ] );
    } );
  }


}
