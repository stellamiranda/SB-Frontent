// Core
import { Component, OnInit } from '@angular/core';

// Services
import { AuthenticationService } from '../../../services/service.index'; 

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  color = 'warn';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }
}
