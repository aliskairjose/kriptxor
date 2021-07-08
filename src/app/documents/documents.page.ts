import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  uploadedFile: boolean = false;
  imgPreview: string | ArrayBuffer;
  imgName: string;

  constructor() { }

  ngOnInit() {
  }


updateFile(event){
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.imgName = event.target.files[0].name;
      // preview de la img
      const reader = new FileReader();
      // leo el archivo seleccionado
      reader.onload = e => this.imgPreview = reader.result;
      reader.readAsDataURL(file);
      this.uploadedFile = true;
    }
  }
}
