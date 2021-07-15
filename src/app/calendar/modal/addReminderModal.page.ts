import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './addReminderModal.page.html',
  styleUrls: ['./addReminderModal.page.scss'],
})
export class AddReminderModalComponent implements OnInit {
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  async close() {
    await this.modal.dismiss();
  }
}
