import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionComponent } from './connexion.component';

describe('connexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<connexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ connexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
