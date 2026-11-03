import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarApuestaComponent } from './insertar-apuesta-component';

describe('InsertarApuestaComponent', () => {
  let component: InsertarApuestaComponent;
  let fixture: ComponentFixture<InsertarApuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarApuestaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertarApuestaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
