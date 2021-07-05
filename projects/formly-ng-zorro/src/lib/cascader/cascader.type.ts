import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzCascaderComponent } from 'ng-zorro-antd/cascader';
import { CascaderFormly } from '.';

@Component({
  selector: 'formly-field-cascader',
  template: `
    <nz-cascader
      #cascader
      [nzPlaceHolder]="to.placeholder || '请选择'"
      [nzOptions]="to.options"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="to.cascader?.allowClear !== false"
      [nzAutoFocus]="to.cascader?.autoFocus === true"
      [nzBackdrop]="to.cascader?.backdrop === true"
      [nzChangeOnSelect]="to.cascader?.changeOnSelect === true"
      [nzExpandTrigger]="to.cascader?.expandTrigger || 'click'"
      [nzLabelProperty]="to.cascader?.labelProperty || 'label'"
      [nzLabelRender]="to.cascader?.labelRender"
      [nzMenuClassName]="to.cascader?.menuClassName"
      [nzMenuStyle]="to.cascader?.menuStyle"
      [nzNotFoundContent]="to.cascader?.notFoundContent"
      [nzOptionRender]="to.cascader?.optionRender"
      [nzShowSearch]="to.cascader?.showSearch"
      [nzSuffixIcon]="to.cascader?.suffixIcon"
      [nzValueProperty]="to.cascader?.valueProperty || 'value'"
      [nzChangeOn]="to.cascader?.changeOn"
      [nzColumnClassName]="to.cascader?.columnClassName"
      [nzExpandIcon]="to.cascader?.expandIcon"
      (nzClear)="cascader?.clear()"
      (ngModelChange)="
        to.cascader?.modelChange && to.cascader.modelChange($event)
      "
      (nzVisibleChange)="
        to.cascader?.visibleChange && to.cascader.visibleChange($event)
      "
      (nzSelectionChange)="
        to.cascader?.selectionChange && to.cascader.selectionChange($event)
      "
    ></nz-cascader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCascader
  extends FieldType
  implements OnInit, AfterViewInit
{
  cascader: CascaderFormly = {};
  @ViewChild('cascader', { static: true }) nzCascader: NzCascaderComponent;
  /**
   *
   */
  constructor() {
    super();
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
