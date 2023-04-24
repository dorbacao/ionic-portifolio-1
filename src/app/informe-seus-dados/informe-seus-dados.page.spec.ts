import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeSeusDadosPage } from './informe-seus-dados.page';

describe('InformeSeusDadosPage', () => {
  let component: InformeSeusDadosPage;
  let fixture: ComponentFixture<InformeSeusDadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformeSeusDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
