import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <ng-container [ngSwitch]="to.type">
      <nz-date-picker
        *ngSwitchCase="'date'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzAllowClear]="to.date?.allowClear"
        [nzBackdrop]="to.date?.backdrop"
        [nzDefaultPickerValue]="to.date?.defaultPickerValue"
        [nzDisabledDate]="to.date?.disabledDate"
        [nzDropdownClassName]="to.date?.dropdownClassName"
        [nzFormat]="to.date?.format"
        [nzInputReadOnly]="to.date?.inputReadOnly"
        [nzMode]="to.date?.mode"
        [nzPlaceHolder]="to.placeholder"
        [nzPopupStyle]="to.date?.popupStyle"
        [nzRenderExtraFooter]="to.date?.renderExtraFooter"
        [nzSuffixIcon]="to.date?.suffixIcon"
        [nzBorderless]="to.date?.borderless"
        [nzInline]="to.date?.inline"
        [nzDateRender]="to.date?.dateRender"
        [nzDisabledTime]="to.date?.disabledTime"
        [nzShowTime]="to.date?.showTime"
        [nzShowToday]="to.date?.showToday"
        [nzShowNow]="to.date?.showNow"
        (nzOnOpenChange)="
          to.date?.onOpenChange && to.date?.onOpenChange($event)
        "
        (nzOnOk)="to.date?.onOk && to.date?.onOk($event)"
      ></nz-date-picker>

      <nz-range-picker
        *ngSwitchCase="'range'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzAllowClear]="to.range?.allowClear"
        [nzBackdrop]="to.range?.backdrop"
        [nzDefaultPickerValue]="to.range?.defaultPickerValue"
        [nzDisabledrange]="to.range?.disabledDate"
        [nzDropdownClassName]="to.range?.dropdownClassName"
        [nzFormat]="to.range?.format"
        [nzInputReadOnly]="to.range?.inputReadOnly"
        [nzMode]="to.range?.mode"
        [nzPlaceHolder]="to.placeholder"
        [nzPopupStyle]="to.range?.popupStyle"
        [nzRenderExtraFooter]="to.range?.renderExtraFooter"
        [nzSuffixIcon]="to.range?.suffixIcon"
        [nzBorderless]="to.range?.borderless"
        [nzInline]="to.range?.inline"
        [nzDateRender]="to.range?.dateRender"
        [nzDisabledTime]="to.range?.disabledTime"
        [nzShowTime]="to.range?.showTime"
        [nzShowToday]="to.range?.showToday"
        [nzShowNow]="to.range?.showNow"
        [nzRanges]="to.range?.ranges"
        [nzSeparator]="to.range?.separator"
        (nzOnOpenChange)="
          to.range?.onOpenChange && to.range?.onOpenChange($event)
        "
        (nzOnOk)="to.range?.onOk && to.range?.onOk($event)"
        (nzOnCalendarChange)="
          to.range?.onCalendarChange && to.range?.onCalendarChange($event)
        "
      >
      </nz-range-picker>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDate extends FieldType implements AfterViewInit {
  ngAfterViewInit(): void {}
}
