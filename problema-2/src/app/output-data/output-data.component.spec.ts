import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDataComponent } from './output-data.component';

describe('OutputDataComponent', () => {
  let component: OutputDataComponent;
  let fixture: ComponentFixture<OutputDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputDataComponent]
    });
    fixture = TestBed.createComponent(OutputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
