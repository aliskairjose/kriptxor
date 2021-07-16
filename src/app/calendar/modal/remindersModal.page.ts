import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './remindersModal.page.html',
  styleUrls: ['./styles.scss'],
})
export class RemindersModalsComponent implements OnInit {
  public title = '';
  public date: '';

  constructor(private modal: ModalController) {}

  ngOnInit() {}

  async close() {
    await this.modal.dismiss();
  }
}
