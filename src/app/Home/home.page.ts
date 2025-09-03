import { Component, HostListener } from '@angular/core';
import { IonMenu, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonGrid, IonRow, IonCol, IonImg, IonAvatar, IonIcon, IonNote, IonList, IonTextarea, IonButton, IonInput, IonButtons } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createOutline, mailOutline, personOutline, home, addCircle, library, searchOutline, arrowForwardOutline, documentTextOutline, closeCircleOutline, timeOutline, ribbonOutline, cashOutline, shieldCheckmarkOutline, alertCircleOutline, sendOutline } from 'ionicons/icons';
import emailjs from '@emailjs/browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonMenu, IonMenuButton,IonList, IonButtons, ReactiveFormsModule,IonInput, IonButton, IonTextarea, CommonModule, IonNote, IonIcon, IonAvatar, IonAccordionGroup, IonItem, IonAccordion, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class HomePage {
  isMobile = false;
  contactForm: FormGroup;
  personOutline = personOutline;
  mailOutline = mailOutline;
  createOutline = createOutline;
  
  constructor(private platform: Platform, private fb: FormBuilder) {
    // The `is` method checks for specific platforms like 'ios', 'android', 'mobile', etc.
    this.isMobile = this.platform.is('mobile');
    
    // You can also check for specific OS
    // this.isMobileDevice = this.platform.is('ios') || this.platform.is('android');

    // Initialize the reactive form with validation
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });

  }
  
  onSubmit(): void {
    if (this.contactForm.valid) {
      emailjs.send(
        'service_ojr6yi3',
        'template_txj1hfh',
        this.contactForm.value,
        'henG7eT7zI4RNW4Z7'
      ).then(() => {
        alert('Mensaje enviado ✅');
      }).catch(() => {
        alert('Error enviando ❌');
      });
    }
    
  }
}
