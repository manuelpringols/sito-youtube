import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiVideoComponent } from './aggiungi-video.component';

describe('AggiungiVideoComponent', () => {
  let component: AggiungiVideoComponent;
  let fixture: ComponentFixture<AggiungiVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AggiungiVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggiungiVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
