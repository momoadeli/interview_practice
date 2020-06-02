import { Component } from '@angular/core';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly title = 'Practice Angular Interview Qs';

  private _h = 'm';

  uid: string;
  pwd: string;
  pwdRep: string;

  uidValidation: boolean = false;
  pwdRepValidation: boolean = false;

  uidValues: string = ''
  pwdValues: string = '';
  pwdrepValues: string = '';

  constructor() {
    console.log('ctor called');

    console.log(this.testFunc(false));

    this.h = 'mo';
    console.log(this.h);

  }


  onUidKey(uid: string) {
    this.uidValues = uid;

    if (this.uidValues && this.uidValues.length >= 5) {
      this.uidValidation = true;
    }
  }

  onPwdKey(pwd: string) {
    this.pwdValues = pwd;

    if ((this.pwdValues && this.pwdrepValues) && (this.pwdrepValues === this.pwdValues)) {
      this.pwdRepValidation = true;
    }
  }

  onPwdRepKey(pwdrep: string) {
    this.pwdrepValues = pwdrep;

    if ((this.pwdValues && this.pwdrepValues) && (this.pwdrepValues === this.pwdValues)) {
      this.pwdRepValidation = true;
    }

  }

  submit(uid, pwd, pwdrep): void {

    console.log(event);

    if (uid.length >= 5 && this.isEmail(uid)) {
      this.uidValidation = true;
    }

    if (pwd === pwdrep) {
      this.pwdRepValidation = true;
    }
  }

  isEmail(uid: string) {
    return true;
  }

  testFunc = (input: boolean) => {

    const a = 100;

    // if (input) {
    //     const b = a + 1;
    //     return b;
    // }
    return a;
  }

  get h(): string {
    return this._h;
  }

  set h(inputH: string) {
    this._h = inputH;
  }

}
