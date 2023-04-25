import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';

import { FormlyFieldStepper } from './stepper.type';
@NgModule({
  declarations: [FormlyFieldStepper],
  imports: [
    CommonModule,
    NzStepsModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [{ name: 'stepper', component: FormlyFieldStepper, wrappers: [] }],
    }),
  ],
})
export class FormlyNzStepperModule {}
