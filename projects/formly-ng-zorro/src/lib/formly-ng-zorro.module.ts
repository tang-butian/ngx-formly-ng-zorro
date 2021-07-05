import { NgModule } from '@angular/core';
import { FormlyNzCascaderModule } from './cascader/cascader.module';
import { FormlyNzFormFieldModule } from './form-field/form-field.module';
import { FormlyNzInputModule } from './input/input.module';

@NgModule({
  declarations: [],
  imports: [
    FormlyNzFormFieldModule,
    FormlyNzInputModule,
    FormlyNzCascaderModule,
  ],
  exports: [],
})
export class FormlyNgZorroModule {}