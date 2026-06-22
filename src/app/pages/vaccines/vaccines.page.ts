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
  selector: 'app-vaccines',
  templateUrl: './vaccines.page.html',
  styleUrls: ['./vaccines.page.scss'],
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
export class VaccinesPage {

  vaccines: any[] = [];
  vaccinations: any[] = [];

  constructor(private vaccineService: VaccineService) {
    this.vaccines = this.vaccineService.getVaccines();
  }

  getRecommendedAge(vaccine: any) {
    return vaccine.recommendedAgeMonths ?? 'N/A';
  }

  getTotalChildrenForVaccine(vaccineId: number) {
    const all = this.vaccineService.getVaccinationsByChild;

    return this.vaccineService
      .getChildren()
      .filter(child =>
        this.vaccineService
          .getVaccinationsByChild(child.id)
          .some(v => v.vaccineId === vaccineId)
      ).length;
  }

  getStatusLabel(vaccineId: number) {
    const all = this.vaccineService.getChildren();

    let applied = 0;
    let pending = 0;
    let late = 0;

    all.forEach(child => {
      const vax = this.vaccineService
        .getVaccinationsByChild(child.id)
        .filter(v => v.vaccineId === vaccineId);

      vax.forEach(v => {
        const status = this.vaccineService.getStatus(v);

        if (status === 'OK') applied++;
        if (status === 'PENDENTE') pending++;
        if (status === 'ATRASADA') late++;
      });
    });

    return { applied, pending, late };
  }
}