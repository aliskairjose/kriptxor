import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../shared/services/document.service';
import { CommonService } from '../shared/services/common.service';
import { StorageService } from '../shared/services/storage.service';

@Component( {
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: [ './documents.page.scss' ],
} )
export class DocumentsPage implements OnInit {

  uploadedFile: boolean = false;
  imgPreview: string | ArrayBuffer;
  imgName: string;
  documents: Document[] = [];

  constructor(
    private common: CommonService,
    private storage: StorageService,
    private documentService: DocumentService
  ) { }

  ngOnInit() {

    this.loadData();
  }


  updateFile( event ) {
    if ( event.target.files.length > 0 ) {
      const file = event.target.files[ 0 ];
      this.imgName = event.target.files[ 0 ].name;
      // preview de la img
      const reader = new FileReader();
      // leo el archivo seleccionado
      reader.onload = e => this.imgPreview = reader.result;
      reader.readAsDataURL( file );
      this.uploadedFile = true;
    }
  }

  private async loadData() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.documentService.list( 1 ).subscribe( response => {
      loading.dismiss();
      this.documents = [ ...response.data ];
    }, () => loading.dismiss() )
  }

}
