import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormlyFieldTime } from './time.type';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { TimeFormly } from '.';
@NgModule({
  declarations: [FormlyFieldTime],
  imports: [
    CommonModule,
    NzTimePickerModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'time',
          component: FormlyFieldTime,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              time: {
                allowEmpty: true,

                defaultOpenValue: new Date(),
                format: 'HH:mm:ss' as any,
              } as TimeFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzTimeModule {}
