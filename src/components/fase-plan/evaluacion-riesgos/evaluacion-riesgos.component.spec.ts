import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionRiesgosComponent } from './evaluacion-riesgos.component';

describe('EvaluacionRiesgosComponent', () => {
  let component: EvaluacionRiesgosComponent;
  let fixture: ComponentFixture<EvaluacionRiesgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionRiesgosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
