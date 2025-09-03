import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet, IonToolbar, IonButtons, IonTitle, IonIcon, IonButton, IonAvatar, IonHeader, IonMenuButton, IonMenu, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterModule, IonApp, IonRouterOutlet]})
export class AppComponent {
  constructor() {}
}
