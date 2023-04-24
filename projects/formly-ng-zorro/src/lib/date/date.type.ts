import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-date',
  template: `
    <ng-container [ngSwitch]="props.type">
      <nz-date-picker
        *ngSwitchCase="'date'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzAllowClear]="props.date?.allowClear"
        [nzBackdrop]="props.date?.backdrop"
        [nzDefaultPickerValue]="props.date?.defaultPickerValue"
        [nzDisabledDate]="props.date?.disabledDate"
        [nzDropdownClassName]="props.date?.dropdownClassName"
        [nzFormat]="props.date?.format"
        [nzInputReadOnly]="props.date?.inputReadOnly"
        [nzMode]="props.date?.mode"
        [nzPlaceHolder]="props.placeholder"
        [nzPopupStyle]="props.date?.popupStyle"
        [nzRenderExtraFooter]="props.date?.renderExtraFooter"
        [nzSuffixIcon]="props.date?.suffixIcon"
        [nzBorderless]="props.date?.borderless"
        [nzInline]="props.date?.inline"
        [nzDateRender]="props.date?.dateRender"
        [nzDisabledTime]="props.date?.disabledTime"
        [nzShowTime]="props.date?.showTime"
        [nzShowToday]="props.date?.showToday"
        [nzShowNow]="props.date?.showNow"
        (nzOnOpenChange)="
          props.date?.onOpenChange && props.date?.onOpenChange($event)
        "
        (nzOnOk)="props.date?.onOk && props.date?.onOk($event)"
      ></nz-date-picker>

      <nz-range-picker
        *ngSwitchCase="'range'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzAllowClear]="props.range?.allowClear"
        [nzBackdrop]="props.range?.backdrop"
        [nzDefaultPickerValue]="props.range?.defaultPickerValue"
        [nzDisabledrange]="props.range?.disabledDate"
        [nzDropdownClassName]="props.range?.dropdownClassName"
        [nzFormat]="props.range?.format"
        [nzInputReadOnly]="props.range?.inputReadOnly"
        [nzMode]="props.range?.mode"
        [nzPlaceHolder]="props.placeholder"
        [nzPopupStyle]="props.range?.popupStyle"
        [nzRenderExtraFooter]="props.range?.renderExtraFooter"
        [nzSuffixIcon]="props.range?.suffixIcon"
        [nzBorderless]="props.range?.borderless"
        [nzInline]="props.range?.inline"
        [nzDateRender]="props.range?.dateRender"
        [nzDisabledTime]="props.range?.disabledTime"
        [nzShowTime]="props.range?.showTime"
        [nzShowToday]="props.range?.showToday"
        [nzShowNow]="props.range?.showNow"
        [nzRanges]="props.range?.ranges"
        [nzSeparator]="props.range?.separator"
        (nzOnOpenChange)="
          props.range?.onOpenChange && props.range?.onOpenChange($event)
        "
        (nzOnOk)="props.range?.onOk && props.range?.onOk($event)"
        (nzOnCalendarChange)="
          props.range?.onCalendarChange && props.range?.onCalendarChange($event)
        "
      >
      </nz-range-picker>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDate extends FieldType {}
