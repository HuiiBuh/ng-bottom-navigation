import {EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';


export default class CustomBottomNavEventEmitter<T> extends EventEmitter<T> {

  private _lastValue: T;

  subscribe(generatorOrNext: any, error?: any, complete?: any): Subscription {
    generatorOrNext(this._lastValue);
    return super.subscribe(generatorOrNext, error, complete);
  }

  get lastValue(): T {
    return this._lastValue;
  }

  emit(value?: T): void {
    this._lastValue = value;
    super.emit(value);
  }
}
