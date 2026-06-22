import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  IonButtons,
  IonBackButton,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonBackButton,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonButton
  ]
})
export class ChildDetailPage {

  child: any;

  vaccines: any[] = [];

  lateVaccines: any[] = [];
  pendingVaccines: any[] = [];
  appliedVaccines: any[] = [];

  newVaccine = {
    vaccineId: null,
    scheduledDate: ''
  };

  constructor(
    private route: ActivatedRoute,
    private vaccineService: VaccineService
  ) {

    this.load();
  }

  load() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.child = this.vaccineService
      .getChildren()
      .find(c => c.id === id);

    this.vaccines = this.vaccineService.getVaccines();

    this.buildVaccines(id);
  }

  buildVaccines(id: number) {

    this.lateVaccines = [];
    this.pendingVaccines = [];
    this.appliedVaccines = [];

    const vaccines = this.vaccineService.getVaccinationsByChild(id);

    vaccines.forEach(v => {

      const status = this.vaccineService.getStatus(v);

      const formatted = {
        name: this.vaccineService.getVaccineName(v.vaccineId),
        date: v.scheduledDate,
        appliedDate: v.applicationDate
      };

      if (status === 'ATRASADA') this.lateVaccines.push(formatted);
      if (status === 'PENDENTE') this.pendingVaccines.push(formatted);
      if (status === 'OK') this.appliedVaccines.push(formatted);
    });
  }

  addVaccine() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.vaccineService.addVaccination({
      childId: id,
      vaccineId: this.newVaccine.vaccineId,
      scheduledDate: this.newVaccine.scheduledDate,
      applied: false
    });

    this.newVaccine = {
      vaccineId: null,
      scheduledDate: ''
    };

    this.load();
  }
}