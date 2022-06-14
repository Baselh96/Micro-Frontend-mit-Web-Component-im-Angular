import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendThreeComponent } from './microfrontend-three.component';

describe('MicrofrontendThreeComponent', () => {
  let component: MicrofrontendThreeComponent;
  let fixture: ComponentFixture<MicrofrontendThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrofrontendThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
