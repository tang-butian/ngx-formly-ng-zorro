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
      [nzOptions]="to.options"
      [formControl]="formControl"
      [formlyAttributes]="field"
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
  ngOnInit(): void {
    const cascader = this.to.cascader as CascaderFormly;
    this.nzCascader.nzAllowClear = this.check(
      this.to.cascader.allowClear,
      this.nzCascader.nzAllowClear
    );

    this.nzCascader.nzAutoFocus = this.check(
      cascader.autoFocus,
      this.nzCascader.nzAutoFocus
    );
    this.nzCascader.nzBackdrop = this.check(
      cascader.backdrop,
      this.nzCascader.nzBackdrop
    );
    this.nzCascader.nzChangeOn = this.check(
      cascader.changeOn,
      this.nzCascader.nzChangeOn
    );
    this.nzCascader.nzChangeOnSelect = this.check(
      cascader.changeOnSelect,
      this.nzCascader.nzChangeOnSelect
    );
    this.nzCascader.nzColumnClassName = this.check(
      cascader.columnClassName,
      this.nzCascader.nzColumnClassName
    );

    this.nzCascader.nzExpandTrigger = this.check(
      cascader.expandTrigger,
      this.nzCascader.nzExpandTrigger
    );

    this.nzCascader.nzExpandIcon = this.check(
      cascader.expandIcon,
      this.nzCascader.nzExpandIcon
    );
    this.nzCascader.nzLabelProperty = this.check(
      cascader.labelProperty,
      this.nzCascader.nzLabelProperty
    );
    this.nzCascader.nzLabelRender = this.check(
      cascader.labelRender,
      this.nzCascader.nzLabelRender
    );
    this.nzCascader.nzMenuClassName = this.check(
      cascader.menuClassName,
      this.nzCascader.nzMenuClassName
    );
    this.nzCascader.nzMenuStyle = this.check(
      cascader.menuStyle,
      this.nzCascader.nzMenuStyle
    );
    this.nzCascader.nzNotFoundContent = this.check(
      cascader.notFoundContent,
      this.nzCascader.nzNotFoundContent
    );
    this.nzCascader.nzOptionRender = this.check(
      cascader.optionRender,
      this.nzCascader.nzOptionRender
    );
    this.nzCascader.nzShowArrow = this.check(
      cascader.showArrow,
      this.nzCascader.nzShowArrow
    );
    this.nzCascader.nzShowSearch = this.check(
      cascader.showSearch,
      this.nzCascader.nzShowSearch
    );
    this.nzCascader.nzSuffixIcon = this.check(
      cascader.suffixIcon,
      this.nzCascader.nzSuffixIcon
    );
    this.nzCascader.nzValueProperty = this.check(
      cascader.valueProperty,
      this.nzCascader.nzValueProperty
    );

    // this.cascader.autoFocus = this.check(this.cascader.autoFocus, false);
    // this.cascader.backdrop = this.check(this.cascader.backdrop, false);
    // this.cascader.changeOnSelect = this.check(
    //   this.cascader.changeOnSelect,
    //   false
    // );
    // this.cascader.expandTrigger = this.check(
    //   this.cascader.expandTrigger,
    //   'click'
    // );
    // this.cascader.labelProperty = this.check(
    //   this.cascader.labelProperty,
    //   'label'
    // );
    // this.cascader.showArrow = this.check(this.cascader.showArrow, true);
    // this.cascader.valueProperty = this.check(
    //   this.cascader.valueProperty,
    //   'value'
    // );
  }
  ngAfterViewInit(): void {}

  check(value: any, defined: any) {
    if (value === null || value === undefined) return defined;
    return value;
  }
}
