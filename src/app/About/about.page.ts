import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonMenu, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonImg, IonGrid, IonRow, IonCol, IonText, IonList, IonAvatar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  standalone: true,
  imports: [RouterModule,IonMenu, IonMenuButton, IonList, IonButtons, IonIcon, IonButton, IonAvatar, IonCol, IonRow, IonGrid, IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class AboutPage implements AfterViewInit{

  ngAfterViewInit() {
    new PureCounter({
      once: false,   // allow replay when element comes into view
    });
  }
  constructor() {}

}
