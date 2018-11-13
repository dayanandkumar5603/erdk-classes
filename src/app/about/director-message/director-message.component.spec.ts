import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMessageComponent } from './director-message.component';

describe('DirectorMessageComponent', () => {
  let component: DirectorMessageComponent;
  let fixture: ComponentFixture<DirectorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
