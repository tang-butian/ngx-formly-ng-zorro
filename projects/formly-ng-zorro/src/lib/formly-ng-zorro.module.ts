import { NgModule } from '@angular/core';
import { FormlyNzCascaderModule } from './cascader/cascader.module';
import { FormlyNzCheckboxModule } from './checkbox/checkbox.module';
import { FormlyNzDateModule } from './date/date.module';
import { FormlyNzFormFieldModule } from './form-field/form-field.module';
import { FormlyNzInputModule } from './input/input.module';
import { FormlyNzRadioModule } from './radio/radio.module';
import { FormlyNzRateModule } from './rate/rate.module';
import { FormlyNzSelectModule } from './select/select.module';
import { FormlyNzSliderModule } from './slider/slider.module';
import { FormlyNzSwitchModule } from './switch/switch.module';
import { FormlyNzTimeModule } from './time/time.module';
import { FormlyNzTransferModule } from './transfer/transfer.module';
import { FormlyNzTreeSelectModule } from './tree-select/tree-select.module';

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
    FormlyNzSliderModule,
    FormlyNzSwitchModule,
    FormlyNzDateModule,
    FormlyNzTimeModule,
    FormlyNzTransferModule,
    FormlyNzTreeSelectModule,
  ],
  exports: [],
})
export class FormlyNgZorroModule {}
