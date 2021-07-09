import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldSelect } from './select.type';

@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: FormlyFieldSelect,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              select: {},
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzSelectModule {}
