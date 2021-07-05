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
      *ngIf="to.type !== 'group'; then group"
      nz-checkbox
      [formControl]="formControl"
      [formlyAttributes]="field"
      >{{ 'Checkbox' }}</label
    >

    <ng-template #group>
      <nz-checkbox-group
        [formControl]="formControl"
        [formlyAttributes]="field"
        [ngModel]="to.options"
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
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
