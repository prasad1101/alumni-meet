import { Injectable } from '@angular/core';
import validator from 'validator';
@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }
  emptyVal(d: String) {
    return validator.isEmpty(d);
  }
}
