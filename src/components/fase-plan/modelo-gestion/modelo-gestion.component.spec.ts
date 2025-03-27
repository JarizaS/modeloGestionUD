import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloGestionComponent } from './modelo-gestion.component';

describe('ModeloGestionComponent', () => {
  let component: ModeloGestionComponent;
  let fixture: ComponentFixture<ModeloGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
