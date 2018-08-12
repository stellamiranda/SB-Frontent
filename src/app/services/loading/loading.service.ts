import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  status = false;

  constructor( ) { }

  isLoading(): boolean {
    return this.status;
  }

}
