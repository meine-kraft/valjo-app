import { AfterViewInit, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonImg, IonGrid, IonRow, IonCol, IonText, IonList, IonAvatar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonAvatar, IonCol, IonRow, IonGrid, IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class Tab2Page implements AfterViewInit{

  ngAfterViewInit() {
    new PureCounter({
      once: false,   // allow replay when element comes into view
    });
  }
  constructor() {}

}
