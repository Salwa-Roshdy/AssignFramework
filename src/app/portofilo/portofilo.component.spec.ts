import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofiloComponent } from './portofilo.component';

describe('PortofiloComponent', () => {
  let component: PortofiloComponent;
  let fixture: ComponentFixture<PortofiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofiloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
