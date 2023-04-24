import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-card',
  template: `
    <nz-card
      [nzActions]="props.card?.actions || []"
      [nzBodyStyle]="props.card?.bodyStyle"
      [nzBorderless]="props.card?.borderless === true"
      [nzCover]="props.card?.cover"
      [nzExtra]="props.card?.extra"
      [nzHoverable]="!!props.card?.hoverable"
      [nzTitle]="props.card?.title"
      [nzType]="props.card?.type"
      [nzLoading]="props.card?.loading"
    >
      <ng-container #fieldComponent></ng-container>
    </nz-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCard extends FieldWrapper {}
