import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonGrid, IonRow, IonCol, IonImg, IonAvatar, IonList, IonButton } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonButton, IonList, IonAvatar, IonImg, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule, IonItem, IonLabel],
})
export class Tab3Page {
  constructor() {}
}
