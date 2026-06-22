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

  vaccinesWithStats: any[] = [];

  constructor(private vaccineService: VaccineService) {
    this.load();
  }

  load() {
    const vaccines = this.vaccineService.getVaccines();
    const children = this.vaccineService.getChildren();

    this.vaccinesWithStats = vaccines.map(vaccine => {

      let applied = 0;
      let pending = 0;
      let late = 0;

      children.forEach(child => {

        const records = this.vaccineService
          .getVaccinationsByChild(child.id)
          .filter(v => v.vaccineId === vaccine.id);

        records.forEach(r => {
          const status = this.vaccineService.getStatus(r);

          if (status === 'OK') applied++;
          if (status === 'PENDENTE') pending++;
          if (status === 'ATRASADA') late++;
        });
      });

      return {
        ...vaccine,
        stats: { applied, pending, late }
      };
    });
  }
}