import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengLibraryPlaygroundComponent } from './primeng-library-playground.component';

describe('PrimengLibraryPlaygroundComponent', () => {
  let component: PrimengLibraryPlaygroundComponent;
  let fixture: ComponentFixture<PrimengLibraryPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengLibraryPlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengLibraryPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
