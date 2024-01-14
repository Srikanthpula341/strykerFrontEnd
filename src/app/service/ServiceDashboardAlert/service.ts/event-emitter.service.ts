import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  // invokeAlertInfoComponentFunction = new EventEmitter();
  // subsVar!: Subscription;

  private subject = new Subject<any>();
  sendClickEvent() {
    this.subject.next(true);
  }
  getClickevent(): Observable<any> {
    return this.subject.asObservable();
  }

  //constructor() { }

  // onAlertCardClick() {
  //   this.invokeAlertInfoComponentFunction.emit();
  // }
}
