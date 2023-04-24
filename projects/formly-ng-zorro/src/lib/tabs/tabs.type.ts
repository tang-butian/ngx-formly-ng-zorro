import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabs',
  template: `
    <nz-tabset
      [nzAnimated]="props.tabs?.animated"
      [nzSize]="props.tabs?.size"
      [nzTabBarExtraContent]="props.tabs?.tabBarExtraContent"
      [nzTabBarStyle]="props.tabs?.tabBarStyle"
      [nzTabPosition]="props.tabs?.tabPosition"
      [nzType]="props.tabs?.type"
      [nzTabBarGutter]="props.tabs?.tabBarGutter"
      [nzHideAll]="props.tabs?.hideAll"
      [nzLinkRouter]="props.tabs?.linkRouter"
      [nzLinkExact]="props.tabs?.linkExact"
      [nzCanDeactivate]="props.tabs?.canDeactivate"
      (nzSelectedIndexChange)="
        props.tabs?.selectedIndexChange && props.tabs?.selectedIndexChange($event)
      "
      (nzSelectChange)="props.tabs?.selectChange && props.tabs?.selectChange($event)"
    >
      <nz-tab
        *ngFor="let tab of field.fieldGroup; let i = index; let last = last"
        [nzTitle]="tab.templateOptions.label"
        [nzForceRender]="tab.templateOptions.tab?.forceRender"
        [nzDisabled]="tab.templateOptions.tab?.disabled"
        (nzClick)="
          tab.templateOptions.tab?.click && tab.templateOptions.tab?.click()
        "
        (nzDeselect)="
          tab.templateOptions.tab?.deselect &&
            tab.templateOptions.tab?.deselect()
        "
        (nzSelect)="
          tab.templateOptions.tab?.select && tab.templateOptions.tab?.select()
        "
        (nzContextmenu)="
          tab.templateOptions.tab?.contextmenu &&
            tab.templateOptions.tab?.contextmenu($event)
        "
      >
        <formly-field [field]="tab"></formly-field>
      </nz-tab>
    </nz-tabset>
  `,
})
export class FormlyFieldTabs extends FieldType {}
