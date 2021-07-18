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
      [nzPlaceHolder]="to.placeholder"
      [nzAllowClear]="to.treeSelect?.allowClear"
      [nzShowIcon]="to.treeSelect?.showIcon"
      [nzShowSearch]="to.treeSelect?.showSearch"
      [nzNotFoundContent]="to.treeSelect?.notFoundContent"
      [nzDropdownMatchSelectWidth]="to.treeSelect?.dropdownMatchSelectWidth"
      [nzDropdownStyle]="to.treeSelect?.dropdownStyle"
      [nzMultiple]="to.treeSelect?.multiple"
      [nzHideUnMatched]="to.treeSelect?.hideUnMatched"
      [nzCheckable]="to.treeSelect?.checkable"
      [nzCheckStrictly]="to.treeSelect?.checkStrictly"
      [nzShowExpand]="to.treeSelect?.showExpand"
      [nzAsyncData]="to.treeSelect?.asyncData"
      [nzNodes]="to.treeSelect?.nodes"
      [nzDefaultExpandAll]="to.treeSelect?.defaultExpandAll"
      [nzExpandedKeys]="to.treeSelect?.expandedKeys"
      [nzDisplayWith]="to.treeSelect?.displayWith"
      [nzMaxTagCount]="to.treeSelect?.maxTagCount"
      [nzMaxTagPlaceholder]="to.treeSelect?.maxTagPlaceholder"
      [nzTreeTemplate]="to.treeSelect?.treeTemplate"
      [nzVirtualHeight]="to.treeSelect?.virtualHeight"
      [nzVirtualItemSize]="to.treeSelect?.virtualItemSize"
      [nzVirtualMaxBufferPx]="to.treeSelect?.virtualMaxBufferPx"
      [nzVirtualMinBufferPx]="to.treeSelect?.virtualMinBufferPx"
      [nzBackdrop]="to.treeSelect?.backdrop"
      (nzExpandChange)="
        to.treeSelect?.expandChange && to.treeSelect?.expandChange($event)
      "
    ></nz-tree-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTreeSelect extends FieldType implements OnInit {
  ngOnInit(): void {}
}
