import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import {
  NzTransferComponent,
  TransferChange,
  TransferItem,
  TransferSearchChange,
} from 'ng-zorro-antd/transfer';
import { CascaderFormly } from 'projects/formly-ng-zorro/src/lib/cascader';
import { CheckboxFormly } from 'projects/formly-ng-zorro/src/lib/checkbox';
import {
  DateFormly,
  RangeDateFormly,
} from 'projects/formly-ng-zorro/src/lib/date';
import {
  AutocompleteFormly,
  InputFormly,
  InputGroupFormly,
  NumberFormly,
} from 'projects/formly-ng-zorro/src/lib/input';
import { RadioFormly } from 'projects/formly-ng-zorro/src/lib/radio';
import { RateFormly } from 'projects/formly-ng-zorro/src/lib/rate';
import { SelectFormly } from 'projects/formly-ng-zorro/src/lib/select';
import { SliderFormly } from 'projects/formly-ng-zorro/src/lib/slider';
import { SwitchFormly } from 'projects/formly-ng-zorro/src/lib/switch';
import { TimeFormly } from 'projects/formly-ng-zorro/src/lib/time';
import { TransferFormly } from 'projects/formly-ng-zorro/src/lib/transfer';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'formly-transfer',
  template: `
    <nz-transfer
      #transfer
      [nzDataSource]="nzDataSource"
      [nzTitles]="nzTitles"
      [nzSelectedKeys]="nzSelectedKeys"
      [nzOperations]="nzOperations"
      [nzListStyle]="nzListStyle"
      [nzItemsUnit]="nzItemsUnit"
      [nzItemUnit]="nzItemUnit"
      [nzRenderList]="nzRenderList"
      [nzRender]="nzRender"
      [nzFooter]="nzFooter"
      [nzShowSearch]="nzShowSearch"
      [nzFilterOption]="nzFilterOption"
      [nzSearchPlaceholder]="nzSearchPlaceholder"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzTargetKeys]="nzTargetKeys"
      (nzChange)="change($event)"
      (nzSelectChange)="selectChange($event)"
    ></nz-transfer>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TransferComponent,
      multi: true,
    },
  ],
})
export class TransferComponent
  extends NzTransferComponent
  implements OnInit, ControlValueAccessor
{
  @ViewChild('transfer', { static: true }) transfer: NzTransferComponent;
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  writeValue(obj: any): void {
    console.log(obj);
    this.nzDataSource;
  }
  registerOnChange(fn: any): void {
    console.log(fn);
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log(fn);
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
  }
  change(value: TransferChange) {
    console.log(value);
    this.onChange(this.transfer.rightDataSource);
  }

  selectChange(value: TransferSearchChange) {
    console.log(value);
  }
  ngOnInit(): void {}
}
