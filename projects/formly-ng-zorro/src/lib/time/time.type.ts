import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'formly-field-time',
  template: `
    <nz-time-picker
      #time
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAddOn]="props.time?.addOn"
      [nzAllowEmpty]="props.time?.allowEmpty"
      [nzBackdrop]="props.time?.backdrop"
      [nzClearText]="props.time?.clearText"
      [nzNowText]="props.time?.nowText"
      [nzOkText]="props.time?.okText"
      [nzDefaultOpenValue]="props.time?.defaultOpenValue"
      [nzDisabledHours]="props.time?.disabledHours"
      [nzDisabledMinutes]="props.time?.disabledMinutes"
      [nzDisabledSeconds]="props.time?.disabledSeconds"
      [nzFormat]="props.time?.format"
      [nzHideDisabledOptions]="props.time?.hideDisabledOptions"
      [nzHourStep]="props.time?.hourStep"
      [nzMinuteStep]="props.time?.minuteStep"
      [nzSecondStep]="props.time?.secondStep"
      ([nzOpen])="(props.time?.open)"
      [nzPopupClassName]="props.time?.popupClassName"
      [nzUse12Hours]="props.time?.use12Hours"
      (ngModelChange)="props.time?.ngModelChange && props.time?.ngModelChange($event)"
      (nzOpenChange)="props.time?.openChange && props.time?.openChange($event)"
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTime extends FieldType implements OnInit {
  @ViewChild('time', { static: true }) time: NzTimePickerComponent;
  ngOnInit(): void {
    if (
      this.props.time?.suffixIcon !== null &&
      this.props.time?.suffixIcon !== undefined
    ) {
      this.time.nzSuffixIcon = this.props.time.suffixIcon;
    }
  }
}
