import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormDamageComponent } from './storm-damage.component';

describe('StormDamageComponent', () => {
  let component: StormDamageComponent;
  let fixture: ComponentFixture<StormDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StormDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StormDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
