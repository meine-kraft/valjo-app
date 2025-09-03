import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonMenu, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonGrid, IonRow, IonCol, IonImg, IonAvatar, IonList, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var paypal: any; // declare PayPal global

@Component({
  selector: 'app-servicios',
  templateUrl: 'servicios.page.html',
  styleUrls: ['servicios.page.scss'],
  standalone: true,
  imports: [RouterModule,IonMenu, IonMenuButton,IonList, IonButton,IonIcon, IonButtons, IonList, IonAvatar, IonImg, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule, IonItem, IonLabel],
})
export class ServiciosPage implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    // Plan Estandar - $2999
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '2999.00',
              currency_code: 'MXN'
            },
            description: "Plan Estandar"
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture();
        console.log("Pago completado:", order);
        alert("¡Pago completado con éxito!");
      }
    }).render('#paypal-button-container-estandar');

    // Plan Profesional - $6999
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '6999.00',
              currency_code: 'MXN'
            },
            description: "Plan Profesional"
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture();
        console.log("Pago completado:", order);
        alert("¡Pago completado con éxito!");
      }
    }).render('#paypal-button-container-pro');
  }
}
