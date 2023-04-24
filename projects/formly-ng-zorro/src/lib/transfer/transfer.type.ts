import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';
import { NzTransferComponent } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'formly-field-transfer',
  template: `
    <formly-transfer
      #transfer
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDataSource]="props.transfer?.dataSource"
      [nzTitles]="props.transfer?.titles"
      [nzSelectedKeys]="props.transfer?.selectedKeys"
      [nzOperations]="props.transfer?.operations"
      [nzListStyle]="props.transfer?.listStyle"
      [nzItemsUnit]="props.transfer?.itemsUnit"
      [nzItemUnit]="props.transfer?.itemUnit"
      [nzRenderList]="props.transfer?.renderList"
      [nzRender]="props.transfer?.render"
      [nzFooter]="props.transfer?.footer"
      [nzShowSearch]="props.transfer?.showSearch"
      [nzFilterOption]="props.transfer?.filterOption"
      [nzSearchPlaceholder]="props.transfer?.searchPlaceholder"
      [nzNotFoundContent]="props.transfer?.notFoundContent"
      [nzTargetKeys]="props.transfer?.targetKeys"
      [resultMap]="props.transfer?.resultMap"
      (nzSearchChange)="
        props.transfer?.onSearchChange && props.transfer?.onSearchChange($event)
      "
      (nzSelectChange)="
        props.transfer?.onSelectChange && props.transfer?.onSelectChange($event)
      "
      (nzChange)="props.transfer?.onChange && props.transfer?.onChange($event)"
    ></formly-transfer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTransfer extends FieldType implements OnInit {
  @ViewChild('transfer', { static: true }) transfer: NzTransferComponent;
  ngOnInit(): void {
    if (
      this.props.transfer?.canMove !== null &&
      this.props.transfer?.canMove !== undefined
    ) {
      this.transfer.nzCanMove = this.props.transfer.canMove;
    }
  }
}
