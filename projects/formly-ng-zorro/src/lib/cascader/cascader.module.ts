import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldCascader } from './cascader.type';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

@NgModule({
  declarations: [FormlyFieldCascader],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    NzCascaderModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascader',
          component: FormlyFieldCascader,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {},
          },
        },
      ],
    }),
  ],
  exports: [],
})
export class FormlyNzCascaderModule {}
