import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyWrapperFormField } from './form-field.wrapper';
import { FixedDirective } from '../directive/fixed.directive';
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
  declarations: [FormlyWrapperFormField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    DirectiveModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormlyWrapperFormField,
        },
      ],
    }),
  ],
})
export class FormlyNzFormFieldModule {}
