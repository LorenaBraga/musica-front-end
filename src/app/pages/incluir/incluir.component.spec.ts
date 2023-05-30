import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirComponent } from './incluir.component';

describe('IncluirComponent', () => {
  let component: IncluirComponent;
  let fixture: ComponentFixture<IncluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncluirComponent]
    });
    fixture = TestBed.createComponent(IncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
