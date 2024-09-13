import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
 counter: any
  constructor(private store :Store<{ counter : {counter :number}}> ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data =>{
      this.counter = data.counter
    })
  
  this.store.select('counter')
  }

}
