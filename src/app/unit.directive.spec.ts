import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, Component } from '@angular/core';
import { UnitDirective } from './unit.directive';
import { CommonModule } from '@angular/common';

@Component({
  template: `<div [appUnit]="2">Test</div>`,
})
class HostComponent {}
@NgModule({
  declarations: [HostComponent, UnitDirective],
  exports: [HostComponent]
})
class HostModule {}

describe('UnitDirective', () => {
  let component: HostComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule], // * we import the host module
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges(); // * so the directive gets appilied
  });

  it('should create a host instance', () => {
    expect(component).toBeTruthy();
  });

  it('should add padding', () => {
    // * arrange
    const el = element.querySelector('div');
    // * assert
    expect(el.style.padding).toBe('2px'); // * we check if the directive worked correctly
  });
});
