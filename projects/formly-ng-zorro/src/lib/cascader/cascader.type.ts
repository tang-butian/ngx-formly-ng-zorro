import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-cascader',
  template: `
    <nz-cascader
      #cascader
      [nzPlaceHolder]="props.placeholder"
      [nzOptions]="props.options"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="props.cascader?.allowClear"
      [nzAutoFocus]="props.cascader?.autoFocus"
      [nzBackdrop]="props.cascader?.backdrop"
      [nzChangeOnSelect]="props.cascader?.changeOnSelect"
      [nzExpandTrigger]="props.cascader?.nzExpandTrigger"
      [nzLabelProperty]="props.cascader?.labelProperty"
      [nzLabelRender]="props.cascader?.labelRender"
      [nzMenuClassName]="props.cascader?.menuClassName"
      [nzMenuStyle]="props.cascader?.menuStyle"
      [nzNotFoundContent]="props.cascader?.notFoundContent"
      [nzOptionRender]="props.cascader?.optionRender"
      [nzShowSearch]="props.cascader?.showSearch"
      [nzSuffixIcon]="props.cascader?.suffixIcon"
      [nzValueProperty]="props.cascader?.valueProperty"
      [nzChangeOn]="props.cascader?.changeOn"
      [nzColumnClassName]="props.cascader?.columnClassName"
      [nzExpandIcon]="props.cascader?.expandIcon"
      [nzLoadData]="props.cascader?.loadData"
      (nzClear)="props.cascader?.clear && props.cascader?.clear()"
      (ngModelChange)="
        props.cascader?.modelChange && props.cascader.modelChange($event)
      "
      (nzVisibleChange)="
        props.cascader?.visibleChange && props.cascader.visibleChange($event)
      "
      (nzSelectionChange)="
        props.cascader?.selectionChange && props.cascader.selectionChange($event)
      "
    ></nz-cascader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCascader extends FieldType implements OnInit {
  ngOnInit(): void {
    this.props.cascader = {
      allowClear: true,
      backdrop: false,
      changeOnSelect: false,
      expandTrigger: 'click',
      labelProperty: 'label',
      showArrow: true,
      showInput: true,
      showSearch: false,
      valueProperty: 'value',
      ...this.props.cascader
    };
  }
}
