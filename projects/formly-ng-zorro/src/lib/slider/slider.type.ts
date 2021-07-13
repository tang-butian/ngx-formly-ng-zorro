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
import { NzSliderComponent } from 'ng-zorro-antd/slider';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-field-slider',
  template: `
    <nz-slider
      #slider
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDots]="to.slider?.dots"
      [nzIncluded]="to.slider?.included"
      [nzMax]="to.slider?.max"
      [nzMin]="to.slider?.min"
      [nzRange]="to.slider?.range"
      [nzStep]="to.slider?.step"
      [nzTipFormatter]="to.slider?.tipFormatter"
      [nzVertical]="to.slider?.vertical"
      [nzReverse]="to.slider?.reverse"
      [nzTooltipVisible]="to.slider?.tooltipVisible"
      (ngModelChange)="
        to.slider?.ngModelChange && to.slider?.ngModelChange($event)
      "
      (nzOnAfterChange)="
        to.slider?.onAfterChange && to.slider?.onAfterChange($event)
      "
    ></nz-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSlider extends FieldType implements AfterViewInit {
  @ViewChild('slider', { static: false }) slider: NzSliderComponent;
  get isArray(): boolean {
    return this.to.options instanceof Array;
  }

  ngAfterViewInit(): void {
    if (this.to.slider?.marks) {
      this.slider.nzMarks = this.to.slider?.marks;
    }
  }
}
