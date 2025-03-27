import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenazasVulnerabilidadesComponent } from './amenazas-vulnerabilidades.component';

describe('AmenazasVulnerabilidadesComponent', () => {
  let component: AmenazasVulnerabilidadesComponent;
  let fixture: ComponentFixture<AmenazasVulnerabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmenazasVulnerabilidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmenazasVulnerabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
