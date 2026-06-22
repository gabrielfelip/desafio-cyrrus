import { Component, OnInit } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { VaccineService } from '../../services/vaccine';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class DashboardPage implements OnInit {

  summary = {
    totalChildren: 0,
    pendingVaccines: 0,
    lateVaccines: 0
  };

  constructor(private vaccineService: VaccineService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.summary = this.vaccineService.getDashboardSummary();
  }
}