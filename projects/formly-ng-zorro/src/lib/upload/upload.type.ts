import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-upload',
  template: `
    <formly-upload
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAction]="props.upload?.action"
      [nzAccept]="props.upload?.accept"
      [nzDirectory]="props.upload?.directory"
      [nzBeforeUpload]="props.upload?.beforeUpload"
      [nzCustomRequest]="props.upload?.customRequest"
      [nzData]="props.upload?.data"
      [(nzFileList)]="props.upload.fileList"
      [nzLimit]="props.upload?.limit"
      [nzFileType]="props.upload?.fileType"
      [nzFilter]="props.upload?.filter"
      [nzHeaders]="props.upload?.headers"
      [nzListType]="props.upload?.listType"
      [nzMultiple]="props.upload?.multiple"
      [nzName]="props.upload?.name"
      [nzShowUploadList]="props.upload?.showUploadList"
      [nzShowButton]="props.upload?.showButton"
      [nzWithCredentials]="props.upload?.withCredentials"
      [nzOpenFileDialogOnClick]="props.upload?.openFileDialogOnClick"
      [nzPreview]="props.upload?.preview"
      [nzPreviewFile]="props.upload?.previewFile"
      [nzPreviewIsImage]="props.upload?.previewIsImage"
      [nzRemove]="props.upload?.remove"
      (nzChange)="props.upload?.change && props.upload?.change($event)"
      [nzDownload]="props.upload?.download"
      [nzTransformFile]="props.upload?.transformFile"
      [nzIconRender]="props.upload?.iconRender"
      [nzFileListRender]="props.upload?.fileListRender"
      [text]="props.upload?.text"
      [nzType]="props.type"
      (nzFileListChange)="
        props.upload?.fileListChange && props.upload?.fileListChange($event)
      "
      [resultMap]="props.upload?.resultMap"
    >
    </formly-upload>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldUpload extends FieldType implements OnInit {
  ngOnInit(): void {}
}
