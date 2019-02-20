import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxLoadingModule.forRoot({
        primaryColour: '#FF1493',
        tertiaryColour: '#FF1493'
      }), HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService],
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

  it(`should have as title 'random-phone-number-generator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Random Phone Numbers Generator');
  });
});
