import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import {
  NzTransferComponent,
  TransferChange,
  TransferItem,
  TransferSearchChange,
  TransferSelectChange,
} from 'ng-zorro-antd/transfer';
import {
  NzUploadChangeParam,
  NzUploadComponent,
  NzUploadFile,
} from 'ng-zorro-antd/upload';
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
import { delay, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'formly-upload',
  template: `
    <nz-upload
      [nzAction]="nzAction"
      [nzAccept]="nzAccept"
      [nzDirectory]="nzDirectory"
      [nzBeforeUpload]="nzBeforeUpload"
      [nzCustomRequest]="nzCustomRequest"
      [nzData]="nzData"
      [(nzFileList)]="nzFileList"
      [nzLimit]="nzLimit"
      [nzSize]="nzSize"
      [nzFileType]="nzFileType"
      [nzFilter]="nzFilter"
      [nzHeaders]="nzHeaders"
      [nzListType]="nzListType"
      [nzMultiple]="nzMultiple"
      [nzName]="nzName"
      [nzShowUploadList]="nzShowUploadList"
      [nzShowButton]="nzShowButton"
      [nzWithCredentials]="nzWithCredentials"
      [nzOpenFileDialogOnClick]="nzOpenFileDialogOnClick"
      [nzPreview]="nzPreview"
      [nzPreviewFile]="nzPreviewFile"
      [nzPreviewIsImage]="nzPreviewIsImage"
      [nzRemove]="nzRemove"
      (nzChange)="change($event)"
      [nzDownload]="nzDownload"
      [nzTransformFile]="nzTransformFile"
      [nzIconRender]="nzIconRender"
      [nzFileListRender]="nzFileListRender"
      [nzType]="nzType"
      (nzFileListChange)="fileListChange($event)"
    >
      <button nz-button type="button">
        <i nz-icon nzType="upload"></i>
        {{ text }}
      </button>
    </nz-upload>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadComponent,
      multi: true,
    },
  ],
})
export class UploadComponent
  extends NzUploadComponent
  implements OnInit, ControlValueAccessor
{
  @ViewChild('upload', { static: true }) transfer: NzUploadComponent;

  /**
   * 按钮文本
   * @default 点击上传
   */
  @Input() text: string = '点击上传';
  @Input() resultMap: (items: NzUploadFile[]) => any[];

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
  }

  fileListChange(list: NzUploadFile[]) {
    this.nzFileListChange.emit(list);
  }

  change(value: NzUploadChangeParam) {
    this.nzChange.emit(value);
    if (['removed', 'success'].includes(value.type)) {
      if (this.resultMap instanceof Function) {
        this.onChange(
          this.resultMap(value.fileList.filter((x) => x.status === 'done'))
        );
      } else {
        this.onChange(value.fileList.filter((x) => x.status === 'done'));
      }
    }
  }

  ngOnChanges() {}

  ngOnInit(): void {}
}
