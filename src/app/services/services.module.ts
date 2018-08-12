// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


// Service
import {
    AuthenticationService,
    LoadingService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    LoadingService
  ],
  declarations: []
})
export class ServiceModule { }
