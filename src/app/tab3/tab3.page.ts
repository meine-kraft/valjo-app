import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonGrid, IonRow, IonCol, IonImg, IonAvatar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonAvatar, IonImg, IonCol, IonRow, IonGrid, IonAccordionGroup, IonItem, IonAccordion, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class Tab3Page {
  constructor() {}
}
