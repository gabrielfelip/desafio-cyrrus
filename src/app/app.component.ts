import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';

import {
  homeOutline,
  homeSharp,
  peopleOutline,
  peopleSharp,
  medkitOutline,
  medkitSharp,
  megaphoneOutline,
  megaphoneSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent {

  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Crianças', url: '/children', icon: 'people' },
    { title: 'Vacinas', url: '/vaccines', icon: 'medkit' },
    { title: 'Campanhas', url: '/campaigns', icon: 'megaphone' },
  ];

  public labels = [
    'Controle Infantil',
    'Vacinação',
    'Saúde',
  ];

  constructor() {}
}