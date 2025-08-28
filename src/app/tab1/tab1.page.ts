import { Component, HostListener } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAccordion, IonItem, IonAccordionGroup, IonGrid, IonRow, IonCol, IonImg, IonAvatar, IonIcon, IonNote, IonList, IonTextarea, IonButton, IonInput } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import { createOutline, mailOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ReactiveFormsModule,IonInput, IonButton, IonTextarea, IonList, CommonModule, IonNote, IonIcon, IonAvatar, IonAccordionGroup, IonItem, IonAccordion, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgbModule],
})
export class Tab1Page {
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

    // Add the ionicons to the library so they can be used in the template
    addIcons({ mailOutline, personOutline, createOutline });

    // Initialize the reactive form with validation
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  
  /**
   * Handles the form submission.
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you would typically send the data to a backend service
      // this.contactForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.contactForm.markAllAsTouched();
      console.log('Form is invalid.');
    }
  }
}
