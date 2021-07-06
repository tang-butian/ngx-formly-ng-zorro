import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <label
      *ngIf="to.type !== 'group'; else group"
      nz-checkbox
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzIndeterminate]="
        field.defaultValue === null || field.defaultValue === undefined
      "
      (ngModelChange)="
        to.checkbox?.ngModelChange && to.checkbox?.ngModelChange($event)
      "
      >{{ to.placeholder }}</label
    >

    <ng-template #group>
      <nz-checkbox-group
        [formControl]="formControl"
        [formlyAttributes]="field"
        [ngModel]="to.options"
        (ngModelChange)="
          to.checkbox?.ngModelChange && to.checkbox?.ngModelChange($event)
        "
      ></nz-checkbox-group>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCheckbox
  extends FieldType
  implements OnInit, AfterViewInit
{
  /**
   *
   */
  constructor() {
    super();
    console.log(this);
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
