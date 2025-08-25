import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonImg, IonGrid, IonRow, IonCol, IonText, IonList, IonAvatar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonAvatar, IonList, IonText, IonCol, IonRow, IonGrid, IonImg, IonAccordionGroup, IonItem, IonAccordion, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class Tab2Page {

  constructor() {}

}
