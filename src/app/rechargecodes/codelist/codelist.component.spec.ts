import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelistComponent } from './codelist.component';

describe('CodelistComponent', () => {
  let component: CodelistComponent;
  let fixture: ComponentFixture<CodelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
