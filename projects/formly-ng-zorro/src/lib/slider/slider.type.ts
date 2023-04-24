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
      [nzDots]="props.slider?.dots"
      [nzIncluded]="props.slider?.included"
      [nzMax]="props.slider?.max"
      [nzMin]="props.slider?.min"
      [nzRange]="props.slider?.range"
      [nzStep]="props.slider?.step"
      [nzTipFormatter]="props.slider?.tipFormatter"
      [nzVertical]="props.slider?.vertical"
      [nzReverse]="props.slider?.reverse"
      [nzTooltipVisible]="props.slider?.tooltipVisible"
      (ngModelChange)="
        props.slider?.ngModelChange && props.slider?.ngModelChange($event)
      "
      (nzOnAfterChange)="
        props.slider?.onAfterChange && props.slider?.onAfterChange($event)
      "
    ></nz-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSlider extends FieldType implements AfterViewInit {
  @ViewChild('slider', { static: false }) slider: NzSliderComponent;

  ngAfterViewInit(): void {
    if (this.props.slider?.marks) {
      this.slider.nzMarks = this.props.slider?.marks;
    }
  }
}
