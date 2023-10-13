import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFavoritasComponent } from './listar-favoritas.component';

describe('ListarFavoritasComponent', () => {
  let component: ListarFavoritasComponent;
  let fixture: ComponentFixture<ListarFavoritasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarFavoritasComponent]
    });
    fixture = TestBed.createComponent(ListarFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
