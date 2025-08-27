import { Component, HostListener } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonGrid, IonRow, IonCol, IonImg, IonAvatar, IonIcon, IonNote } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, IonNote, IonIcon, IonAvatar, IonAccordionGroup, IonItem, IonAccordion, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class Tab1Page {
  isMobile = false;

  constructor(private platform: Platform) {
    // The `is` method checks for specific platforms like 'ios', 'android', 'mobile', etc.
    this.isMobile = this.platform.is('mobile');
    
    // You can also check for specific OS
    // this.isMobileDevice = this.platform.is('ios') || this.platform.is('android');
  }
  
}
