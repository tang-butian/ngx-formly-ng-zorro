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
import {
  AutocompleteFormly,
  InputFormly,
  NumberFormly,
  TextAreaFormly,
} from '.';
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
              input: {} as InputFormly,
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
              autoComplete: {
                backfill: false,
                defaultActiveFirstOption: true,
                compareWith: (o1: any, o2: any) => o1 === o2,
              } as AutocompleteFormly,
            },
          },
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
              number: {
                max: Infinity,
                min: -Infinity,
                parser: (value: string) =>
                  value
                    .trim()
                    .replace(/。/g, '.')
                    .replace(/[^\w\.-]+/g, ''),
                precisionMode: 'toFixed',
                step: 1,
                inputMode: 'decimal',
                formatter: (value: number) => value,
              } as NumberFormly,
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
        {
          name: 'textarea',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'textarea',
              textarea: {
                rows: 4,
                autosize: false,
              } as TextAreaFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzInputModule {}
