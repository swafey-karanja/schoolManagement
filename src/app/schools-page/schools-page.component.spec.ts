import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsPageComponent } from './schools-page.component';

describe('SchoolsPageComponent', () => {
  let component: SchoolsPageComponent;
  let fixture: ComponentFixture<SchoolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
