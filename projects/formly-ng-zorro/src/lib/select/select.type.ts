import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  AfterViewInit,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { NzSelectComponent } from 'ng-zorro-antd/select';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-field-select',
  template: `
    <nz-select
      #select
      [nzPlaceHolder]="props.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [compareWith]="props.select?.compareWith"
      [nzAllowClear]="props.select?.allowClear"
      [nzAutoClearSearchValue]="props.select?.autoClearSearchValue"
      [nzBackdrop]="props.select?.backdrop"
      [nzBorderless]="props.select?.borderless"
      [nzOpen]="props.select?.open"
      [nzDropdownClassName]="props.select?.dropdownMatchSelectWidth"
      [nzDropdownStyle]="props.select?.dropdownStyle"
      [nzCustomTemplate]="props.select?.customTemplate"
      [nzServerSearch]="props.select?.serverSearch"
      [nzMaxMultipleCount]="props.select?.maxMultipleCount"
      [nzMode]="props.select?.mode"
      [nzLoading]="props.select?.loading"
      [nzShowArrow]="props.select?.showArrow"
      [nzMaxTagCount]="props.select?.maxTagCount"
      [nzMaxTagPlaceholder]="props.select?.maxTagPlaceholder"
      [nzOptionHeightPx]="props.select?.optionHeightPx"
      [nzOptionOverflowSize]="props.select?.optionOverflowSize"
      (ngModelChange)="
        props.select?.ngModelChange && props.select?.ngModelChange($event)
      "
      (nzBlur)="props.select?.blur && props.select?.blur($event)"
      (nzFocus)="props.select?.focus && props.select?.focus($event)"
      (nzOpenChange)="props.select?.openChange && props.select?.openChange($event)"
      (nzScrollToBottom)="
        props.select?.scrollToBottom && props.select?.scrollToBottom($event)
      "
      (nzOnSearch)="props.select?.onSearch && props.select?.onSearch($event)"
    >
      <ng-container
        *ngFor="let item of props.options | formlySelectOptions: field | async"
      >
        <nz-option-group *ngIf="item.group" [nzLabel]="item.label">
          <nz-option
            *ngFor="let child of item.group"
            [nzValue]="child.value"
            [nzDisabled]="child.disabled"
            [nzLabel]="child.label"
          >
          </nz-option>
        </nz-option-group>
        <nz-option
          *ngIf="!item.group"
          [nzValue]="item.value"
          [nzDisabled]="item.disabled"
          [nzLabel]="item.label"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType implements OnInit {
  @ViewChild('select', { static: true }) select: NzSelectComponent;
  ngOnInit(): void {
    if (this.props.select?.filterOption instanceof Function) {
      this.select.nzFilterOption = this.props.select?.filterOption;
    }
  }
}
