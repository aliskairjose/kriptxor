import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CampaignService } from 'src/app/shared/services/campaign.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-not-apply-modal',
  templateUrl: './doesNotApplyModal.page.html',
  styleUrls: ['./styles.scss'],
})
export class DoesNotApplyModalComponent implements OnInit {
  public options: string[] = [
    'Difunto',
    'Molesto',
    '50% Full',
    'Planilla PL13/23',
    'Otros',
  ];
  public selectedOption = '';
  public clientId: number;

  constructor(
    private common: CommonService,
    private campaignService: CampaignService,
    private modal: ModalController
  ) {}

  ngOnInit() {}

  public async update() {
    if (this.selectedOption == '') {
      this.common.presentToast({
        message: 'Debe seleccionar una opción',
        color: 'danger',
      });
      return;
    }

    console.log(this.selectedOption);

    this.campaignService
      .updateCampaignClientNotApply(this.clientId, {
        condition: 10,
        reason_not_apply: 'Difunto',
      })
      .subscribe((res) => {
        this.common.presentToast({
          message: 'Petición exitosa',
          color: 'success',
        });

        this.modal.dismiss();
      });
  }
}
