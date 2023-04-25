import { Component, ChangeDetectionStrategy, OnInit, ViewChildren, TemplateRef, QueryList, AfterViewInit, OnChanges } from '@angular/core';
import { FieldType, FormlyField } from '@ngx-formly/core';
import { NzStepComponent } from 'ng-zorro-antd/steps';

@Component({
  selector: 'formly-field-stepper',
  template: `
    <nz-steps
      [nzType]="props.stepper?.type"
      [nzCurrent]="props.stepper?.current"
      [nzDirection]="props.stepper?.direction"
      [nzLabelPlacement]="props.stepper?.labelPlacement"
      [nzProgressDot]="props.stepper?.progressDot"
      [nzSize]="props.stepper?.size"
      [nzStatus]="props.stepper?.status"
      [nzStartIndex]="props.stepper?.startIndex"
      (nzIndexChange)="onIndexChange($event)" >
      <nz-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last"
        [nzDescription]="step.props.stepFly?.description"
        [nzIcon]="step.props.stepFly?.icon"
        
        [nzTitle]="step.props.stepFly?.title"
        [nzSubtitle]="step.props.stepFly?.subtitle"
        [nzDisabled]="step.props.stepFly?.disabled"
        [nzPercentage]="step.props.stepFly?.percentage"
        >
      </nz-step>

    </nz-steps>
    <div class="steps-content">
     <formly-field *ngFor="let step of field.fieldGroup; let index = index; let last = last" [field]="step" ></formly-field>
    </div>
  `,
  styles: [
    `
    .steps-content {
        padding-top: 12px;
      }

    `
  ]
})
export class FormlyFieldStepper extends FieldType implements OnInit, AfterViewInit  {
  @ViewChildren(FormlyField) formly: QueryList<FormlyField>;
  @ViewChildren(NzStepComponent) steps: QueryList<NzStepComponent>;
  ngOnInit(): void {
    this.props.stepper = {
      current: 0,
      startIndex: 0,
      direction: 'horizontal',
      labelPlacement: 'horizontal',
      size: 'default',
      status: 'process',
      ...this.props.stepper
    };
  }
  ngAfterViewInit(): void {
    this.formly.forEach((item, index) => {
      if (this.props.stepper.current !== index) {
        item.field.hide = true;
      }
    });
    this.field.fieldGroup.forEach((item, index) => {
      if (item.props.stepFly?.status) {
        this.steps.get(index).nzStatus = item.props.stepFly.status;
      }
    });
  }
  
  onIndexChange(index: number): void {
    this.props.stepper.current = index;
    this.formly.forEach((item, ii) => {
      item.field.hide = !(index === ii);
    });
    this.props.stepper?.onIndexChange && (this.props.stepper?.onIndexChange(index));
  }
}
