import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { isFunction } from '@ngx-formly/core/lib/utils';
import { NzSelectComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'formly-field-radio',
  template: `
    <nz-select
      #select
      [nzPlaceHolder]="to.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [compareWith]="to.select?.compareWith"
      [nzAllowClear]="to.select?.allowClear"
      [nzAutoClearSearchValue]="to.select?.autoClearSearchValue"
      [nzBackdrop]="to.select?.backdrop"
      [nzBorderless]="to.select?.borderless"
      [nzOpen]="to.select?.open"
      [nzDropdownClassName]="to.select?.dropdownMatchSelectWidth"
      [nzDropdownStyle]="to.select?.dropdownStyle"
      [nzCustomTemplate]="to.select?.customTemplate"
      [nzServerSearch]="to.select?.serverSearch"
      [nzMaxMultipleCount]="to.select?.maxMultipleCount"
      [nzMode]="to.select?.mode"
      [nzLoading]="to.select?.loading"
      [nzMaxTagCount]="to.select?.maxTagCount"
      [nzMaxTagPlaceholder]="to.select?.maxTagPlaceholder"
      [nzOptionHeightPx]="to.select?.optionHeightPx"
      [nzOptionOverflowSize]="to.select?.optionOverflowSize"
      (ngModelChange)="
        to.select?.ngModelChange && to.select?.ngModelChange($event)
      "
      (nzBlur)="to.select?.blur && to.select?.blur($event)"
      (nzFocus)="to.select?.focus && to.select?.focus($event)"
      (nzOpenChange)="to.select?.openChange && to.select?.openChange($event)"
      (nzScrollToBottom)="
        to.select?.scrollToBottom && to.select?.scrollToBottom($event)
      "
      (nzOnSearch)="to.select?.onSearch && to.select?.onSearch($event)"
    >
      <nz-option
        *ngFor="let option of isArray ? to.options : (to.options | async)"
        [nzValue]="option.value"
        [nzLabel]="option.label"
        [nzHide]="option.hide"
        [nzDisabled]="option.disabled"
      ></nz-option>
    </nz-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType implements AfterViewInit {
  @ViewChild('select', { static: false }) select: NzSelectComponent;
  get isArray(): boolean {
    return this.to.options instanceof Array;
  }
  ngAfterViewInit(): void {
    if (this.to.select?.filterOption instanceof Function) {
      this.select.nzFilterOption = this.to.select?.filterOption;
    }
  }
}
