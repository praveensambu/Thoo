import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofingServiceComponent } from './roofing-service.component';

describe('RoofingServiceComponent', () => {
  let component: RoofingServiceComponent;
  let fixture: ComponentFixture<RoofingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoofingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
