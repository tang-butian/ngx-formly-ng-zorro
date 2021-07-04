import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzAutocompleteComponent } from 'ng-zorro-antd/auto-complete';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'formly-field-nz-input',
  template: `
    <ng-container [ngSwitch]="to.type">
      <nz-input-group
        *ngSwitchCase="'input'"
        [nzPrefixIcon]="to.input?.prefixIcon"
        [nzSuffixIcon]="to.input?.suffixIcon"
        [nzAddOnAfterIcon]="to.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.input?.addOnBeforeIcon"
        [nzAddOnBefore]="to.input?.addOnBefore"
        [nzAddOnAfter]="to.input?.addOnAfter"
        [nzPrefix]="to.input?.prefix"
        [nzSuffix]="to.input?.suffix"
      >
        <input
          nz-input
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to.input?.borderless"
          [formlyAttributes]="field"
        />
      </nz-input-group>

      <nz-input-group
        *ngSwitchCase="'password'"
        [nzPrefixIcon]="to.input?.prefixIcon"
        [nzSuffixIcon]="to.input?.suffixIcon"
        [nzAddOnAfterIcon]="to.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.input?.addOnBeforeIcon"
        [nzAddOnBefore]="to.input?.addOnBefore"
        [nzAddOnAfter]="to.input?.addOnAfter"
        [nzPrefix]="to.input?.prefix"
        [nzSuffix]="to.input?.suffix"
      >
        <input
          type="password"
          nz-input
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to.input?.borderless"
          [formlyAttributes]="field"
        />
      </nz-input-group>

      <nz-input-number
        #inputNumber
        *ngSwitchCase="'number'"
        [placeholder]="to.placeholder"
        [formControl]="formControl"
        [nzBorderless]="to.input?.borderless"
        [formlyAttributes]="field"
        [nzMax]="to.max"
        [nzMin]="to.min"
        [nzPrecision]="to.number?.precision"
        [nzPrecisionMode]="to.number?.precisionMode"
        [nzStep]="to.number?.step"
        [nzInputMode]="to.number?.inputMode"
        (ngModelChange)="to.number?.modelChange($event)"
        [ngStyle]="width"
      ></nz-input-number>

      <nz-input-group
        *ngSwitchCase="'autoComplete'"
        [nzPrefixIcon]="to.autoComplete?.prefixIcon"
        [nzSuffixIcon]="to.autoComplete?.suffixIcon"
        [nzAddOnAfterIcon]="to.autoComplete?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.autoComplete?.addOnBeforeIcon"
        [nzAddOnBefore]="to.autoComplete?.addOnBefore"
        [nzAddOnAfter]="to.autoComplete?.addOnAfter"
        [nzPrefix]="to.autoComplete?.prefix"
        [nzSuffix]="to.autoComplete?.suffix"
      >
        <input
          nz-input
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to.autoComplete?.borderless"
          [formlyAttributes]="field"
          [nzAutocomplete]="auto"
        />
        <nz-autocomplete
          [nzBackfill]="to.autoComplete?.backfill"
          [nzDefaultActiveFirstOption]="
            to.autoComplete?.defaultActiveFirstOption
          "
          [nzWidth]="to.autoComplete?.width"
          [nzOverlayClassName]="to.autoComplete?.overlayClassName"
          [nzOverlayStyle]="to.autoComplete?.overlayStyle"
          #auto
        >
          <nz-auto-option
            *ngFor="let option of to.autoComplete.dataSource"
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
export class FormlyFieldInput extends FieldType implements AfterViewInit {
  @ViewChild('inputNumber', { static: false }) number: NzInputNumberComponent;
  @ViewChild('auto', { static: false }) autoComplete: NzAutocompleteComponent;
  /**
   *
   */
  constructor() {
    super();
    console.log(this);
  }
  ngAfterViewInit(): void {
    console.log(this.to);

    if (this.to.type === 'number') {
      this.number.nzParser = this.to.number?.parser ?? this.number.nzParser;
      this.number.nzFormatter =
        this.to.number?.formatter ?? this.number.nzFormatter;
    }

    if (this.to.type === 'autoComplete') {
      this.autoComplete.compareWith =
        this.to.autoComplete?.compareWith ?? this.autoComplete.compareWith;
    }
  }

  get width() {
    if (this.to.type === 'number' && this.to.number?.width) {
      return { width: this.to.number.width };
    }
    return '';
  }
}
