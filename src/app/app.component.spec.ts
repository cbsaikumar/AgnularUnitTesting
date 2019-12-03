import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Welcome to Unit Testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Unit Testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Welcome to Unit Testing');
  });

  it('increment function gets called when clicked on button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const button = fixture.debugElement.nativeElement.querySelector('.button');
    const spyOnIncrement = spyOn(app, 'increment');

    button.click();
    // another way
    // const button1 = fixture.debugElement.query(By.css('.button'));
    // button1.triggerEventHandler('click', null);
    
    expect(spyOnIncrement).toHaveBeenCalled();
  })

  it('should increment the counter if increment button is clicked (+1)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const button = fixture.debugElement.nativeElement.querySelector('.button');
    const app = fixture.debugElement.componentInstance;

    button.click();
    button.click();

    expect(app.counter).toEqual(2);
  });
});
