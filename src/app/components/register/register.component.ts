// Core
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { AuthenticationService } from '../../services/service.index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Properties
  formRegister: FormGroup;

  loading = false;
  hide = true;

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.formRegister = new FormGroup({
      email: new FormControl( null, [
                                      Validators.required,
                                      Validators.minLength(5),
                                      Validators.email
                                    ]
                            ),
      password: new FormControl( null, [
                                          Validators.required,
                                          Validators.minLength(8)
                                       ]
                               )
    });
  }

  register() {
    this.loading = true;
    // tslint:disable-next-line:max-line-length
    this._authenticationService.registerCredential(this.formRegister.value.email, this.formRegister.value.password).subscribe((resp: any) => {
        console.log(resp);
        this.loading = false;
    },
    (err) => {
      console.log(err);
    });
  }

}
