// Core
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { AuthenticationService, LoadingService } from '../../services/service.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Properties
  formLogin: FormGroup;

  loading = false;
  hide = true;

  constructor(
    private _authenticationService: AuthenticationService,
    private _loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl( null, [
                                      Validators.required,
                                      Validators.minLength(4)
                                    ]
                            ),
      password: new FormControl( null, [
                                          Validators.required,
                                          Validators.minLength(4)
                                       ]
                               )
    });
  }

  login() {
    this._loadingService.status = true;
    this._authenticationService.validateCredential(this.formLogin.value.email, this.formLogin.value.password).subscribe((resp: any) => {
        console.log(resp);
        this._loadingService.status = false;
    },
    (err) => {
      this._loadingService.status = false;
      console.log(err);
    });
  }

}
