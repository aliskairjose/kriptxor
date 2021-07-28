import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../shared/classes/note';
import { Page } from '../shared/interfaces/pagination';
import { NotesService } from '../shared/services/notes.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CampaignService } from '../shared/services/campaign.service';
import { Client } from '../shared/classes/client';
import { CommonService } from '../shared/services/common.service';
@Component( {
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: [ './notes.page.scss' ],
} )
export class NotesPage implements OnInit {
  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;
  @ViewChild( 'content' ) content;

  id: number;
  client: Client = {};
  notes: Note[];
  note: Note = new Note;
  pages: Page;
  updatedNote: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private notesService: NotesService,
    public alertController: AlertController,
    private campaignService: CampaignService,
    private common: CommonService,
  ) {
    this.activateRoute.params.subscribe(
      params => {
        this.id = params[ 'id' ];
      }
    )
  }

  ngOnInit() {
    this.getNotes();
    this.getCampaignClient();
  }

  getCampaignClient() {
    this.campaignService.getCampaignClientById( this.id ).subscribe( response => {
      this.client = { ...response.data.cliente };
    }, () => console.error( "error get campaign client service" ) )
  }//

  getNotes( page: number = 1 ) {
    this.notesService.getNotes( this.id, page ).subscribe(
      response => {
        this.notes = response.data as Note[];
        this.pages = response.meta.page as Page;
        this.activateInfiniteScroll();
      }
    )
  }
  getNote( note: Note ) {
    this.notesService.getNote( note.id ).subscribe(
      response => {
        this.note = response.data as Note;
        this.content.setFocus();
      }
    )
  }
  createNote() {
    this.note.campaign_client_id = this.id;
    if ( this.note.content != null ) {
      this.notesService.createNote( this.note ).subscribe(
        response => {
          this.note = new Note;
          this.common.presentToast( { message: response.message } );
          this.getNotes();
          if ( this.infiniteScroll.disabled == true ) {
            this.infiniteScroll.disabled = false;
          }
        }
      )
    } else {
      this.common.presentToast( { message: 'El campo de texto no puede estar vacio' } );
    }

  }
  updateNote() {
    this.notesService.updateNote( this.note ).subscribe(
      response => {
        this.note = new Note;
        this.updatedNote = false;
        this.common.presentToast( { message: response.message } );
        this.getNotes();
      }
    )
  }
  deleteNote( note: Note ) {
    this.notesService.deleteNote( note.id ).subscribe(
      response => {
        this.note = new Note;
        this.common.presentToast( { message: response.message } );
        this.getNotes();
      }
    )
  }



  // Infinite Scroll
  scrollNotes( event: any ) {
    this.notesService.getNotes( this.id, this.pages.currentPage + 1 ).subscribe(
      response => {
        this.notes = this.notes.concat( response.data );
        this.pages = response.meta.page as Page;
        //Finish the load
        event.target.complete();
      }
    )
  }

  loadData( event: any ) {
    setTimeout( () => {
      //console.log('Done');
      this.scrollNotes( event )

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if ( this.notes.length == this.pages.total ) {
        event.target.disabled = true;
      }
    }, 500 );
  }
  activateInfiniteScroll() {
    this.infiniteScroll.disabled = false;
  }

  // Alerts
  async alert( note: Note ) {
    const alert = await this.alertController.create( {
      cssClass: 'my-custom-class',
      header: 'Nota creada por ' + note.user.nombre + " " + note.user.apellido,
      message: '¿Que accion desea realizar?',
      buttons: [
        {
          text: 'Editar',
          cssClass: 'secondary',
          handler: () => {
            this.updatedNote = true;
            this.getNote( note );
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteNoteAlert( note );
          }
        }
      ]
    } );

    await alert.present();
  }

  async deleteNoteAlert( note: Note ) {
    const alert = await this.alertController.create( {
      cssClass: 'my-custom-class',
      header: '¿Estas seguro de borrar esta nota?',
      message: 'Esta accion <strong>no se podra revertir</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteNote( note );
          }
        }
      ]
    } );

    await alert.present();
  }

}
