import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-cascader',
  template: `
    <nz-cascader
      [nzOptions]="to.options"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (ngModelChange)="to.cascader?.modelChange($event)"
    ></nz-cascader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCascader extends FieldType implements AfterViewInit {
  /**
   *
   */
  constructor() {
    super();
    console.log(this);
  }
  ngAfterViewInit(): void {}
}
