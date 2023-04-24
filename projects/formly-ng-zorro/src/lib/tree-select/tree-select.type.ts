import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'formly-field-upload',
  template: `
    <nz-tree-select
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzPlaceHolder]="props.placeholder"
      [nzAllowClear]="props.treeSelect?.allowClear"
      [nzShowIcon]="props.treeSelect?.showIcon"
      [nzShowSearch]="props.treeSelect?.showSearch"
      [nzNotFoundContent]="props.treeSelect?.notFoundContent"
      [nzDropdownMatchSelectWidth]="props.treeSelect?.dropdownMatchSelectWidth"
      [nzDropdownStyle]="props.treeSelect?.dropdownStyle"
      [nzMultiple]="props.treeSelect?.multiple"
      [nzHideUnMatched]="props.treeSelect?.hideUnMatched"
      [nzCheckable]="props.treeSelect?.checkable"
      [nzCheckStrictly]="props.treeSelect?.checkStrictly"
      [nzShowExpand]="props.treeSelect?.showExpand"
      [nzAsyncData]="props.treeSelect?.asyncData"
      [nzNodes]="props.treeSelect?.nodes"
      [nzDefaultExpandAll]="props.treeSelect?.defaultExpandAll"
      [nzExpandedKeys]="props.treeSelect?.expandedKeys"
      [nzDisplayWith]="props.treeSelect?.displayWith"
      [nzMaxTagCount]="props.treeSelect?.maxTagCount"
      [nzMaxTagPlaceholder]="props.treeSelect?.maxTagPlaceholder"
      [nzTreeTemplate]="props.treeSelect?.treeTemplate"
      [nzVirtualHeight]="props.treeSelect?.virtualHeight"
      [nzVirtualItemSize]="props.treeSelect?.virtualItemSize"
      [nzVirtualMaxBufferPx]="props.treeSelect?.virtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.treeSelect?.virtualMinBufferPx"
      [nzBackdrop]="props.treeSelect?.backdrop"
      (nzExpandChange)="
        props.treeSelect?.expandChange && props.treeSelect?.expandChange($event)
      "
    ></nz-tree-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTreeSelect extends FieldType implements OnInit {
  ngOnInit(): void {}
}
