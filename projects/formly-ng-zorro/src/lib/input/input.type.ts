import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzAutocompleteComponent } from 'ng-zorro-antd/auto-complete';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'formly-field-input',
  template: `
    <ng-container [ngSwitch]="props.type">
      <!-- <nz-input-group
        *ngSwitchCase="'input'"
        [nzPrefixIcon]="props.input?.prefixIcon"
        [nzSuffixIcon]="props.input?.suffixIcon"
        [nzAddOnAfterIcon]="props.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="props.input?.addOnBeforeIcon"
        [nzAddOnBefore]="props.input?.addOnBefore"
        [nzAddOnAfter]="props.input?.addOnAfter"
        [nzPrefix]="props.input?.prefix"
        [nzSuffix]="props.input?.suffix"
      > -->
      <input
        *ngSwitchCase="'input'"
        nz-input
        [placeholder]="props.placeholder"
        [formControl]="formControl"
        [nzBorderless]="props.input?.borderless"
        [formlyAttributes]="field"
      />
      <!-- </nz-input-group> -->

      <nz-input-group
        *ngSwitchCase="'password'"
        [nzPrefixIcon]="props.input?.prefixIcon"
        [nzSuffixIcon]="props.input?.suffixIcon"
        [nzAddOnAfterIcon]="props.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="props.input?.addOnBeforeIcon"
        [nzAddOnBefore]="props.input?.addOnBefore"
        [nzAddOnAfter]="props.input?.addOnAfter"
        [nzPrefix]="props.input?.prefix"
        [nzSuffix]="props.input?.suffix"
      >
        <input
          type="password"
          nz-input
          [placeholder]="props.placeholder"
          [formControl]="formControl"
          [nzBorderless]="props.input?.borderless"
          [formlyAttributes]="field"
        />
      </nz-input-group>

      <nz-input-number
        #inputNumber
        *ngSwitchCase="'number'"
        [placeholder]="props.placeholder"
        [formControl]="formControl"
        [nzBorderless]="props.input?.borderless"
        [formlyAttributes]="field"
        [nzMax]="props.max"
        [nzMin]="props.min"
        [nzPrecision]="props.number?.precision"
        [nzPrecisionMode]="props.number?.precisionMode"
        [nzStep]="props.number?.step"
        [nzInputMode]="props.number?.inputMode"
        (ngModelChange)="
          props.number.modelChange && props.number?.modelChange($event)
        "
        [ngStyle]="width"
        [nzParser]="to?.number?.parser"
        [nzFormatter]="to?.number?.formatter"
      ></nz-input-number>

      <ng-container *ngSwitchCase="'textarea'">
        <nz-textarea-count
          *ngIf="props.textarea?.maxCharacterCount; else textarea"
          [nzMaxCharacterCount]="props.textarea?.maxCharacterCount"
        >
          <textarea
            [rows]="props.textarea?.rows"
            nz-input
            [placeholder]="props.placeholder"
            [formControl]="formControl"
            [nzBorderless]="props.textarea?.borderless"
            [formlyAttributes]="field"
            [nzAutosize]="props.textarea?.autosize"
          ></textarea>
        </nz-textarea-count>

        <ng-template #textarea>
          <textarea
            [rows]="props.textarea?.rows"
            nz-input
            [placeholder]="props.placeholder"
            [formControl]="formControl"
            [nzBorderless]="props.textarea?.borderless"
            [formlyAttributes]="field"
            [nzAutosize]="props.textarea?.autosize"
          ></textarea>
        </ng-template>
      </ng-container>

      <nz-input-group
        *ngSwitchCase="'autoComplete'"
        [nzPrefixIcon]="props.autoComplete?.prefixIcon"
        [nzSuffixIcon]="props.autoComplete?.suffixIcon"
        [nzAddOnAfterIcon]="props.autoComplete?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="props.autoComplete?.addOnBeforeIcon"
        [nzAddOnBefore]="props.autoComplete?.addOnBefore"
        [nzAddOnAfter]="props.autoComplete?.addOnAfter"
        [nzPrefix]="props.autoComplete?.prefix"
        [nzSuffix]="props.autoComplete?.suffix"
      >
        <input
          nz-input
          [placeholder]="props.placeholder"
          [formControl]="formControl"
          [nzBorderless]="props.autoComplete?.borderless"
          [formlyAttributes]="field"
          [nzAutocomplete]="auto"
        />
        <nz-autocomplete
          [nzBackfill]="props.autoComplete?.backfill"
          [nzDefaultActiveFirstOption]="
            props.autoComplete?.defaultActiveFirstOption
          "
          [nzWidth]="props.autoComplete?.width"
          [nzOverlayClassName]="props.autoComplete?.overlayClassName"
          [nzOverlayStyle]="props.autoComplete?.overlayStyle"
          [compareWith]="props.autoComplete?.compareWith"
          #auto
        >
          <nz-auto-option
            *ngFor="let option of props.autoComplete.dataSource"
            [nzLabel]="option.label"
            [nzValue]="option.value"
          >
            {{ option.label }}
          </nz-auto-option>
        </nz-autocomplete>
      </nz-input-group>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig> implements OnInit {



  ngOnInit(): void {
    // 设置初始化
    switch (this.props.type) {
      case 'number':
        this.props.number = {
          max: Infinity,
          min: -Infinity,
          parser: (value: string) =>
            value
              .trim()
              .replace(/。/g, '.')
              .replace(/[^\w\.-]+/g, ''),
          precisionMode: 'toFixed',
          step: 1,
          inputMode: 'decimal',
          formatter: (value: number) => value,
          ...this.props.number
        };
        return;
      case 'autoComplete':
        this.props.autoComplete = {
          backfill: false,
          defaultActiveFirstOption: true,
          compareWith: (o1: any, o2: any) => o1 === o2,
          ...this.props.autoComplete
        };
        return;
    }
  }



  get width() {
    if (this.props.type === 'number' && this.props.number?.width) {
      return { width: this.props.number.width };
    }
    return '';
  }
}
