import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
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
    IonItem,
    IonInput,
    IonButton
  ]
})
export class ChildrenPage {

  children: any[] = [];

  newChild = {
    name: '',
    birthDate: ''
  };

  constructor(
    private vaccineService: VaccineService,
    private router: Router
  ) {
    this.load();
  }

  load() {
    this.children = this.vaccineService.getChildren();
  }

  addChild() {
    this.vaccineService.addChild(this.newChild);
    this.newChild = { name: '', birthDate: '' };
    this.load();
  }

  deleteChild(id: number) {
    this.vaccineService.deleteChild(id);
    this.load();
  }

  openChild(id: number) {
    this.router.navigate(['/child-detail', id]);
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR');
  }
}