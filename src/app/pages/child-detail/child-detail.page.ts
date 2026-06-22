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

    this.child = this.vaccineService.getChildren()
      .find(c => c.id === id);

    this.vaccines = this.vaccineService.getVaccines();
  }

  addVaccine() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.newVaccine.vaccineId || !this.newVaccine.scheduledDate) return;

    this.vaccineService.addVaccination({
      childId: id,
      vaccineId: this.newVaccine.vaccineId,
      scheduledDate: this.newVaccine.scheduledDate,
      applied: false
    });

    this.reset();
  }

  markAsApplied(v: any) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.vaccineService.updateVaccination(id, v.vaccineId, {
      applied: true,
      applicationDate: new Date().toISOString().split('T')[0]
    });
  }

  editDate(v: any) {
    const newDate = prompt('Nova data (YYYY-MM-DD):', v.scheduledDate);
    if (!newDate) return;

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.vaccineService.updateVaccination(id, v.vaccineId, {
      scheduledDate: newDate
    });
  }

  deleteVaccination(v: any) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.vaccineService.deleteVaccination(id, v.vaccineId);
  }

  getHistory() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    return this.vaccineService.getVaccinationsByChild(id)
      .map(v => ({
        name: this.vaccineService.getVaccineName(v.vaccineId),
        scheduledDate: v.scheduledDate,
        appliedDate: v.applicationDate,
        status: this.vaccineService.getStatus(v),
        vaccineId: v.vaccineId
      }))
      .sort((a, b) =>
        new Date(a.scheduledDate).getTime() -
        new Date(b.scheduledDate).getTime()
      );
  }

  reset() {
    this.newVaccine = {
      vaccineId: null,
      scheduledDate: ''
    };
  }
}