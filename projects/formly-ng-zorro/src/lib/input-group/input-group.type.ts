import { Component, ChangeDetectionStrategy, Optional } from '@angular/core';
import { FieldArrayType, FieldType, FieldWrapper } from '@ngx-formly/core';
import { NzFormItemComponent } from 'ng-zorro-antd/form';

@Component({
  selector: 'formly-field-input-group',
  template: `
    <nz-form-item [fixed-label]="to!.spanLabelFixed!">
      <ng-container *ngIf="to.label && to.hideLabel !== true">
        <nz-form-label
          [nzSpan]="to.grid?.label?.span"
          [nzRequired]="to.required && to.hideRequiredMarker !== true"
          [nzFor]="id"
        >
          <span class="formly-label-text">
            {{ to.label }}
          </span>
        </nz-form-label>
      </ng-container>
      <nz-form-control
        #control
        [nzSpan]="to.grid?.control?.span"
        [nzValidateStatus]="errorState"
        [nzErrorTip]="errorTpl"
      >
        <nz-input-group nzCompact>
          <formly-field *ngFor="let f of group" [field]="f"></formly-field>
        </nz-input-group>

        <ng-template #errorTpl let-control>
          <formly-validation-message
            [field]="field"
          ></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputGroup extends FieldWrapper {
  /**
   *
   */
  constructor(@Optional() item: NzFormItemComponent) {
    super();
    console.log(item);
  }
  get errorState() {
    if (this.key) {
      return this.showError ? 'error' : 'success';
    } else {
      return this.group.filter(
        (x) =>
          x.formControl?.invalid &&
          (x.formControl?.touched ||
            x.options.parentForm?.submitted ||
            !!this.field.validation?.show)
      ).length
        ? 'error'
        : 'success';
    }
  }

  get group() {
    return this.field.fieldGroup;
  }
}
