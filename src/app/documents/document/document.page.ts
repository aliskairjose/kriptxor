import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {
  url: string;
  id: any;


  constructor(
    private activateRoute: ActivatedRoute,
    private previewAnyFile: PreviewAnyFile
  ) {
    this.activateRoute.params.subscribe(
      params => {
        this.url = params['url'];
        this.id = params['id'];
      }
    )
   }

  ngOnInit() {
    this.previewAnyFile.preview(this.url)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }


}
