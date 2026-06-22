import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineService } from '../../services/vaccine';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle
  ]
})
export class CampaignsPage {

  campaigns: any[] = [];

  constructor(private vaccineService: VaccineService) {
    this.campaigns = this.vaccineService.getCampaigns();
  }

  getVaccineName(id: number) {
    return this.vaccineService.getVaccineName(id);
  }

  getCampaignData(campaign: any) {

    const children = this.vaccineService.getChildren();

    const list: any[] = [];

    let eligible = 0;
    let vaccinated = 0;
    let pending = 0;

    children.forEach(child => {

      const isEligible =
        this.vaccineService.isChildEligible(child, campaign);

      if (!isEligible) {

        list.push({
          child,
          status: 'NAO_ELEGIVEL'
        });

        return;
      }

      eligible++;

      const vaccines =
        this.vaccineService.getVaccinationsByChild(child.id);

      const hasVaccine =
        vaccines.some(v => v.vaccineId === campaign.vaccineId);

      if (hasVaccine) {

        vaccinated++;

        list.push({
          child,
          status: 'VACINADO'
        });

      } else {

        pending++;

        list.push({
          child,
          status: 'PENDENTE'
        });
      }
    });

    return {
      eligibleCount: eligible,
      vaccinatedCount: vaccinated,
      pendingCount: pending,
      list
    };
  }
}