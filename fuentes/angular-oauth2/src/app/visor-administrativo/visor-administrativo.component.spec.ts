import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorAdministrativoComponent } from './visor-administrativo.component';

describe('VisorAdministrativoComponent', () => {
  let component: VisorAdministrativoComponent;
  let fixture: ComponentFixture<VisorAdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorAdministrativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
