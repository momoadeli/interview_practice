import { Component, OnInit } from '@angular/core';

import { FakeObservablesService } from './fake-observables.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fake Observables practice';
  fakeObservable$: Observable<any>;

  constructor(private fs: FakeObservablesService) {

  }

  ngOnInit() {
    this.fs.firstFake()
      .subscribe( (firstF: {msg: string}) => {
        console.log(firstF.msg);
      });
    this.fs.firstFake()
      .subscribe( (firstF: {msg: string}) => {
        console.log(firstF.msg);
      });
  }
}

