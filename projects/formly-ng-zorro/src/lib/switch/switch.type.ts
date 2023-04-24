import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-switch',
  template: `
    <nz-switch
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzCheckedChildren]="props.switch?.checkedChildren"
      [nzUnCheckedChildren]="props.switch?.unCheckedChildren"
      [nzLoading]="props.switch?.loading"
      [nzControl]="props.switch?.control"
      (ngModelChange)="
        props.switch?.ngModelChange && props.switch.ngModelChange($event)
      "
    ></nz-switch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSwitch extends FieldType {}
