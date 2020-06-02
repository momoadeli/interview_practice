import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeObservablesService {

  observable$: Observable<any>;

  constructor() {
    this.observable$ = Observable.create( (observer: any) => {
        observer.next({msg: '1st fake observable element'});
    });
  }

  firstFake = (): Observable<{msg: string}> => {
      return this.observable$;
  }
}
