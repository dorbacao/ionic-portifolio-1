import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor() { }

  canLoad(): boolean {
    console.log('canLoad');
    return false;
  }

}