import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment11, reset } from 'src/app/state/counter.action';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.scss']
})
export class CounterBtnComponent implements OnInit {

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
  }
  onIncrement() {
    this.store.dispatch(increment11())
  }
  onDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
