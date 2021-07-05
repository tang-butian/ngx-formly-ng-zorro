import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-nz-form-field',
  styleUrls: ['./form-field.wrapper.less'],
  template: `
    <nz-form-item [fixed-label]="to!.spanLabelFixed!">
      <ng-container *ngIf="to.label && to.hideLabel !== true">
        <nz-form-label
          [nzSpan]="to.grid?.label?.span"
          [nzRequired]="to.required && to.hideRequiredMarker !== true"
          [nzFor]="id"
        >
          <span class="formly-label-text">
            {{ to.label }}
          </span>
        </nz-form-label>
      </ng-container>
      <nz-form-control
        [nzSpan]="to.grid?.control?.span"
        [nzValidateStatus]="errorState"
        [nzErrorTip]="errorTpl"
      >
        <ng-container #fieldComponent></ng-container>

        <ng-template #errorTpl let-control>
          <formly-validation-message
            [field]="field"
          ></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField
  extends FieldWrapper
  implements AfterViewInit
{
  private el: HTMLDivElement;

  /**
   *
   */
  constructor(er: ElementRef, private render: Renderer2) {
    super();
    // console.log(this);
    this.el = er.nativeElement as HTMLDivElement;
  }
  get errorState() {
    return this.showError ? 'error' : '';
  }

  ngAfterViewInit(): void {
    // vertical 布局去掉 ant-col-xxx 列样式
    if (
      (this.el.parentNode.parentNode.parentNode as any).classList.contains(
        'ant-form-vertical'
      )
    ) {
      // 拿到 class
      const label = this.el.children[0].querySelector('nz-form-label');
      if (label) {
        const labelClass = label.classList.value;
        /ant-col-\d+/g
          .exec(labelClass)
          .forEach((x) => label.classList.remove(x));
      }

      // 拿到 control
      const control = this.el.children[0].querySelector('nz-form-control');
      if (control) {
        const controlClass = control.classList.value;
        /ant-col-\d+/g
          .exec(controlClass)
          .forEach((x) => control.classList.remove(x));
      }
    }

    // 设置 gutter
    const gutter = (this.el.parentNode.parentNode as any).attributes[
      'ng-reflect-nz-gutter'
    ];
    if (gutter) {
      const padding = (gutter.value - 0) / 2;
      this.render.setStyle(this.el.parentNode, 'padding-left', `${padding}px`);
      this.render.setStyle(this.el.parentNode, 'padding-right', `${padding}px`);
    }
  }

  getFlexStyle() {
    if (this.to.spanLabelFixed) {
      // prettier-ignore
      return { 'flex': '0 0 100px','flex-basis': '100'}
      // return { 'flex': `0 0 ${this.to.spanLabelFixed}px` };
    }
    return null;
  }

  getMaxWidh() {
    if (this.to.spanLabelFixed) {
      return { 'max-width': `calc(100% - ${this.to.spanLabelFixed}px)` };
    }
    return null;
  }
}