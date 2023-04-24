import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-rate',
  template: `
    <nz-rate
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="props.rate?.allowClear"
      [nzAllowHalf]="props.rate?.allowHalf"
      [nzCharacter]="props.rate?.character"
      [nzCount]="props.rate?.count"
      [nzTooltips]="props.rate?.tooltips"
      (ngModelChange)="props.rate?.ngModelChange && props.rate?.ngModelChange($event)"
      (nzOnBlur)="props.rate?.onBlur && props.rate?.onBlur($event)"
      (nzOnFocus)="props.rate?.onFocus && props.rate?.onFocus($event)"
      (nzOnHoverChange)="
        props.rate?.onHoverChange && props.rate?.onHoverChange($event)
      "
      (nzOnKeyDown)="props.rate?.onKyeDown && props.rate?.onKyeDown($event)"
    ></nz-rate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRate extends FieldType {}
