import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnLoadProcessService {

  constructor() { }

  isActive: Boolean = false;

  processActiveChange: Subject<Boolean> = new Subject<Boolean>();

  showLoading() {
    this.isActive=true;
    this.processActiveChange.next(true);
  }
  hideLoading() {
    this.isActive=false;
    this.processActiveChange.next(false);
  }
}
