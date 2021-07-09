import { NgModule } from '@angular/core';
import { FormlyNzCascaderModule } from './cascader/cascader.module';
import { FormlyNzCheckboxModule } from './checkbox/checkbox.module';
import { FormlyNzFormFieldModule } from './form-field/form-field.module';
import { FormlyNzInputModule } from './input/input.module';
import { FormlyNzRadioModule } from './radio/radio.module';
import { FormlyNzRateModule } from './rate/rate.module';
import { FormlyNzSelectModule } from './select/select.module';

@NgModule({
  declarations: [],
  imports: [
    FormlyNzFormFieldModule,
    FormlyNzInputModule,
    FormlyNzCascaderModule,
    FormlyNzCheckboxModule,
    FormlyNzRadioModule,
    FormlyNzRateModule,
    FormlyNzSelectModule,
  ],
  exports: [],
})
export class FormlyNgZorroModule {}
