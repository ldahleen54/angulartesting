import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add message', () => {
    service.add('test message');
    expect(service.messages[0]).toEqual('test message');
  });

  it('should clear messages', () => {
    service.clear();
    expect(service.messages.length).toEqual(0);
  });
});
