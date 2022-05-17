import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpsComponent } from './line-ups.component';

describe('LineUpsComponent', () => {
  let component: LineUpsComponent;
  let fixture: ComponentFixture<LineUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
