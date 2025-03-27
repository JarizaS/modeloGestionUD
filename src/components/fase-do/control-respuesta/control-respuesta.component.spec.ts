import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRespuestaComponent } from './control-respuesta.component';

describe('ControlRespuestaComponent', () => {
  let component: ControlRespuestaComponent;
  let fixture: ComponentFixture<ControlRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlRespuestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
