import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyNzCardModule } from './card/card.module';
import { FormlyNzCascaderModule } from './cascader/cascader.module';
import { FormlyNzCheckboxModule } from './checkbox/checkbox.module';
import { FormlyNzDateModule } from './date/date.module';
import { FixedDirective } from './directive/fixed.directive';
import { FormlyNzFormFieldModule } from './form-field/form-field.module';
import { FormlyNzInputGroupModule } from './input-group/input-group.module';
import { FormlyNzInputModule } from './input/input.module';
import { FormlyNzRadioModule } from './radio/radio.module';
import { FormlyNzRateModule } from './rate/rate.module';
import { FormlyNzSelectModule } from './select/select.module';
import { FormlyNzSliderModule } from './slider/slider.module';
import { FormlyNzSwitchModule } from './switch/switch.module';
import { FormlyNzTabsModule } from './tabs/tabs.module';
import { FormlyNzTimeModule } from './time/time.module';
import { FormlyNzTransferModule } from './transfer/transfer.module';
import { FormlyNzTreeSelectModule } from './tree-select/tree-select.module';
import { FormlyNzUploadModule } from './upload/upload.module';

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
    FormlyNzUploadModule,
    FormlyNzCardModule,
    NzFormModule,
    FormlyNzTabsModule,
    FormlyNzInputGroupModule,
  ],
  exports: [],
})
export class FormlyNgZorroModule {}
