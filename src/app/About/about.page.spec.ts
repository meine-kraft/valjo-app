import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage } from './about.page';

describe('Tab2Page', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  

  beforeEach(async () => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
