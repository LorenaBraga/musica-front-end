import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirGeneroComponent } from './incluir-genero.component';

describe('IncluirGeneroComponent', () => {
  let component: IncluirGeneroComponent;
  let fixture: ComponentFixture<IncluirGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncluirGeneroComponent]
    });
    fixture = TestBed.createComponent(IncluirGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
