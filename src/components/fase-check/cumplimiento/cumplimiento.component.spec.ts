import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumplimientoComponent } from './cumplimiento.component';

describe('CumplimientoComponent', () => {
  let component: CumplimientoComponent;
  let fixture: ComponentFixture<CumplimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CumplimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumplimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
