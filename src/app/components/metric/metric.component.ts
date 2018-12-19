import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {

  // tslint:disable-next-line:no-inferrable-types
  @Input() title: string = '';
  @Input() description = '';

  // tslint:disable-next-line:no-inferrable-types
  // private _value: number = 0;
  // tslint:disable-next-line:no-inferrable-types
//  private _max: number = 100;

  @Input('used') value: number = 0;
  // tslint:disable-next-line:no-input-rename
  // @Input('used')
  // set value (value: number) {
  //   if (isNaN(value)) {
  //     value = 0;
  //   }
  //   this._value = value;
  // }
  // get value(): number {
  //   return this._value;
  // }

  @Input('available') max: number = 100;
  // tslint:disable-next-line:no-input-rename
  // @Input('available')
  // set max (max: number) {
  //   if (isNaN(max)) {
  //     max = 100;
  //   }
  //   this._max = max;
  // }
  // get max(): number {
  //   return this._max;
  // }


  constructor() { }

  ngOnChanges(changes) {
    if ((changes.max) && isNaN(changes.max.currentValue)) {
      this.max = 100;
    }
    if ((changes.value) && isNaN(changes.value.currentValue)) {
      this.value = 0;
    }
  }

  isDanger() {
    return (this.value / this.max) > 0.7;
  }

}
