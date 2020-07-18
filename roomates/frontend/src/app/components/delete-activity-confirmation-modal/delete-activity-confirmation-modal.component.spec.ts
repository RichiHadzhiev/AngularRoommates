import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityConfirmationModalComponent } from './delete-activity-confirmation-modal.component';

describe('DeleteActivityConfirmationModalComponent', () => {
  let component: DeleteActivityConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteActivityConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
