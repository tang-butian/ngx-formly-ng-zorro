import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <label
      *ngIf="props.type !== 'group'; else group"
      nz-checkbox
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzIndeterminate]="
        field.defaultValue === null || field.defaultValue === undefined
      "
      (ngModelChange)="
        props.checkbox?.ngModelChange && props.checkbox?.ngModelChange($event)
      "
      >{{ props.placeholder }}</label
    >

    <ng-template #group>
      <nz-checkbox-group
        [formControl]="formControl"
        [formlyAttributes]="field"
        [ngModel]="props.options"
        (ngModelChange)="
          props.checkbox?.ngModelChange && props.checkbox?.ngModelChange($event)
        "
      ></nz-checkbox-group>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCheckbox extends FieldType {}
