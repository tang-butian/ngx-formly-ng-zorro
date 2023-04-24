import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <nz-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzName]="props.radio?.name"
      [nzButtonStyle]="props.radio?.buttonStyle"
      (ngModelChange)="
        props.radio?.ngModelChange && props.radio?.ngModelChange($event)
      "
    >
      <ng-container *ngIf="props.type !== 'button'; else button">
        <label
          nz-radio
          [nzValue]="option.value"
          *ngFor="let option of props.options | formlySelectOptions: field | async"
          [nzDisabled]="option.disabled === true"
          >{{ option.label }}</label
        >
      </ng-container>

      <ng-template #button>
        <label
          nz-radio-button
          [nzValue]="option.value"
          *ngFor="let option of props.options | formlySelectOptions: field | async"
          [nzDisabled]="option.disabled === true"
          >{{ option.label }}</label
        >
      </ng-template>
    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType {}
