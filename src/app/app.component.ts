import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonRouterOutlet, NavController, Platform } from '@ionic/angular';
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
    { title: 'Inicio', url: '/dashboard', icon: 'home' },
    { title: 'Listado', url: '/campaigns', icon: 'flag' },
    { title: 'Buscar Clientes', url: '/seeker', icon: 'people' },
    // { title: 'Notas', url: '/notes/102189', icon: 'flag' },
    // { title: 'Agenda', url: '/schedule/102189', icon: 'flag' },
    { title: 'Calendario', url: '/calendar', icon: 'calendar' },
    { title: 'Agenda', url: '/clients', icon: 'person' },
    //{ title: 'Cotizaciones', url: '/market-rates/116', icon: 'flag' },
  ];

  public labels = [];
  navigationExtras: NavigationExtras = {
    skipLocationChange: true,
    replaceUrl: true
  };
  @ViewChildren( IonRouterOutlet ) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private router: Router,
    private platform: Platform,
    private storage: StorageService,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  openUrl( url: string ): void {
    window.open( url, '_system' );
  }

  async closeSession() {
    await this.storage.clear();
    this.menuCtrl.close();
    this.navCtrl.navigateRoot( '/login' );
  }

  backButtonEvent() {
    this.platform.backButton.subscribe( async () => {

      this.routerOutlets.forEach( ( outlet: IonRouterOutlet ) => {
        if ( outlet && outlet.canGoBack() ) {
          outlet.pop();
        } else {
          navigator[ 'app' ].exitApp();
        }
      } );
    } );
  }

  private initializeApp(): void {
    this.platform.ready().then( async () => {
      SplashScreen.hide();
      const isLoggedin = await this.storage.get( TOKEN );
      const route = isLoggedin ? 'dashboard' : '/login';
      this.router.navigate( [ route ] );
    } );
  }
}
