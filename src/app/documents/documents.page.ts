import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { DocumentService } from '../shared/services/document.service';
import { Document } from '../shared/classes/document';
import {Page} from '../shared/interfaces/pagination';
import { CommonService } from '../shared/services/common.service';
import { StorageService } from '../shared/services/storage.service';
import { AlertController } from '@ionic/angular';


@Component( {
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: [ './documents.page.scss' ],
} )
export class DocumentsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  id: any;
  uploadedFile: boolean = false;
  imgPreview: string | ArrayBuffer;
  imgName: string;
  document: Document = new Document;
  documents: Document[];
  pages: Page;
  isFile: boolean = false;
  file: any;

  constructor(
    private common: CommonService,
    private storage: StorageService,
    private documentService: DocumentService,
    private activateRoute: ActivatedRoute,
    public alertController: AlertController
  ) {
    this.activateRoute.params.subscribe(
      params => this.id = params['id']
    )
  }

  ngOnInit() {

    this.getDocuments()

  }

  getDocuments(page: number = 1){
    this.documentService.list(this.id,page).subscribe(
      response => {
        this.documents = response.data as Document[];
        this.pages = response.meta.page as Page;
        this.activateInfiniteScroll();
      }

    )
  }
  create(){
    this.document.file != null ? this.createDocument() : this.invalidDocument();
  }
  createDocument(){
    this.document.campaign_client_id = this.id;
    this.documentService.create(this.document).subscribe(
      response =>{
        this.document = new Document;
        this.isFile = false;
        this.successRequest(response.message);
        this.getDocuments();
      }
    )
  }
  deleteDocument(document: Document){
    this.documentService.delete(document.id).subscribe(
      response =>{
        this.document = new Document;
        this.successRequest(response.message);
        this.getDocuments();
      }
    )
  }
  uploadFile(event: any){
    this.document.name = event.target.files[0].name;
    this.document.file = event.target.files[0];
    this.isFile = true;
  }

  //Infinite scroll
  scrollDocments(event: any){
    this.documentService.list(this.id, this.pages.currentPage + 1).subscribe(
      response => {
        this.documents = this.documents.concat(response.data as Document[]);
        this.pages = response.meta.page as Page;
        //Finish the load
        event.target.complete();
      })
  }

  loadData(event: any) {
    setTimeout(() => {
      //console.log('Done');
      this.scrollDocments(event)

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //console.log(this.pages.total);
    if (this.documents.length == this.pages.total) {
      event.target.disabled = true;
    }
    }, 500);
  }
  activateInfiniteScroll() {
    this.infiniteScroll.disabled = false;
  }
  // Alerts
  async delete(document: Document) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: '¿Estas seguro de borrar este documento?',
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
          this.deleteDocument(document);
        }
      }
    ]
  });

  await alert.present();
  }
  async invalidDocument() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'El documento es invalido',
        buttons: ['OK']
      });

      await alert.present();
    }
    async successRequest(text: string) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Exito!',
          subHeader: '',
          message: text,
          buttons: ['OK']
        });

        await alert.present();
      }


}
