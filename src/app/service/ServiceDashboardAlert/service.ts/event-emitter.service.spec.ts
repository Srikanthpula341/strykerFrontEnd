import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterService } from './event-emitter.service';

describe('EventEmitterService', () => {
  let service: EventEmitterService;
  let component: EventEmitterService;
  let fixture: ComponentFixture<EventEmitterService>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getClickevent', () => {
    expect(component.getClickevent()).toBeTruthy();
  });
  it('should call getClickevent', () => {
    expect(component.sendClickEvent()).toBeTruthy();
  });
  // it('should call getClickevent', () => {
  //   expect(component.getClickevent()).toContain;
  // });
  // it('should call sendClickEvent', () => {
  //   expect(component.sendClickEvent()).toBeTruthy();
  // });
});
