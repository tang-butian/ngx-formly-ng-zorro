import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { FormlyFieldInput } from './input.type';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
@NgModule({
  declarations: [FormlyFieldInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzAutocompleteModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FormlyFieldInput,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              type: 'input',
            },
          },
        },
        { name: 'string', extends: 'input' },

        {
          name: 'autoComplete',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'autoComplete',
            },
          },
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'inputGroup',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'inputGroup',
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzInputModule {}
