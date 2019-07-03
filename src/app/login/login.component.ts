import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  login: string;
  password: string;
  isLoginError: boolean = false;

  // constructor(private _authService: AuthenticationService, private router: Router) {

  // }

  // onLoginEventHandler() {
  //   const res = this._authService.login(this.login, this.password);
  //   this.isLoginError = res;

  //   if (res) {
  //     this.router.navigate(['/']);
  //   }
  // }

}
