import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  IonButton
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
    IonButton
  ]
})
export class CampaignsPage {

  summary: any;
  riskList: any[] = [];

  constructor(
    private vaccineService: VaccineService,
    private router: Router
  ) {

    const children = this.vaccineService.getChildren();

    let late = 0;
    let pending = 0;

    const result: any[] = [];

    children.forEach(child => {

      const vaccines = this.vaccineService.getVaccinationsByChild(child.id);

      let riskCount = 0;

      vaccines.forEach(v => {
        const status = this.vaccineService.getStatus(v);

        if (status === 'ATRASADA') {
          late++;
          riskCount++;
        }

        if (status === 'PENDENTE') {
          pending++;
          riskCount++;
        }
      });

      if (riskCount > 0) {
        result.push({
          child,
          riskCount
        });
      }
    });

    // ordenar do mais crítico para o menos crítico
    this.riskList = result.sort((a, b) => b.riskCount - a.riskCount);

    this.summary = {
      atRiskChildren: result.length,
      lateVaccines: late,
      pendingVaccines: pending
    };
  }

  openChild(childId: number) {
    this.router.navigate(['/child-detail', childId]);
  }
}