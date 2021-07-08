import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CascaderFormly } from 'projects/formly-ng-zorro/src/lib/cascader';
import { CheckboxFormly } from 'projects/formly-ng-zorro/src/lib/checkbox';
import {
  AutocompleteFormly,
  InputFormly,
  InputGroupFormly,
  NumberFormly,
} from 'projects/formly-ng-zorro/src/lib/input';
import { RadioFormly } from 'projects/formly-ng-zorro/src/lib/radio';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  @ViewChild('suffixIconSearch') matPrefix: TemplateRef<any>;
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: 'input',
        placeholder: 'input',
        required: true,

        spanLabelFixed: 100,
        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },
        input: {
          addOnAfterIcon: 'user',
          addOnBeforeIcon: 'setting',
          prefixIcon: 'user',
          suffixIcon: 'lock',
          //  prefix: this.matPrefix,
        } as InputFormly,
      },
    },
    {
      key: 'password',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'password',
        label: 'password',
        placeholder: '131313123123',
        required: true,
        spanLabelFixed: 100,
        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },
        input: {
          addOnAfterIcon: 'user',
          addOnBeforeIcon: 'setting',
          prefixIcon: 'user',
          suffixIcon: 'lock',
          //  prefix: this.matPrefix,
        } as InputFormly,
      },
    },

    {
      key: 'number',
      type: 'number',
      className: 'ant-col  ant-col-24',
      // defaultValue: 2,
      templateOptions: {
        label: 'number',
        placeholder: 'number',
        required: true,
        spanLabelFixed: 100,

        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },

        number: {
          step: 2,
          precision: 1,
          width: '100%',
          formatter: (value: number) => {
            if (value === null || value === undefined) return;
            return `${value} %`;
          },
          parser: (value: string) => {
            return value.replace(' %', '');
          },
          modelChange: (value: number) => {
            console.log(value);

            return;
          },

          //  prefix: this.matPrefix,
        } as NumberFormly,
      },
    },

    {
      key: 'autoComplete',
      type: 'autoComplete',
      className: 'ant-col  ant-col-24',

      templateOptions: {
        label: 'autoComplete',
        placeholder: 'autoComplete',
        required: true,
        spanLabelFixed: 100,

        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },

        autoComplete: {
          addOnAfterIcon: 'user',
          addOnBeforeIcon: 'setting',
          prefixIcon: 'user',
          suffixIcon: 'lock',

          backfill: true,
          dataSource: [
            { value: 123, label: 123 },
            { value: 123123123, label: 123123123 },
          ] as any,
          defaultActiveFirstOption: true,
          compareWith: (o1, o2) => {
            console.log(o1);
            return o1 === o2;
          },
          //  prefix: this.matPrefix,
        } as AutocompleteFormly,
      },
    },

    {
      key: 'cascader',
      type: 'cascader',
      className: 'ant-col  ant-col-24',
      defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
      templateOptions: {
        label: 'cascader',
        placeholder: 'cascader',
        required: true,
        spanLabelFixed: 100,

        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                    isLeaf: true,
                  },
                ],
              },
              {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true,
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
        cascader: {
          expandTrigger: 'hover',
          expandIcon: 'user',
          modelChange: (value: any[]) => {
            console.log(value);
          },
          visibleChange: (visible) => {
            console.log(visible);
          },
          selectionChange: (value) => {
            console.log(value);
          },
        } as CascaderFormly,
      },
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: 'checkbox_group',
        type: 'group',
        required: true,
        spanLabelFixed: 100,
        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },
        options: [
          { label: 'Apple', value: 'Apple', disabled: true, checked: true },
          { label: 'Pear', value: 'Pear', disabled: true },
          { label: 'Orange', value: 'Orange' },
        ],
        checkbox: {
          ngModelChange: (array) => {
            console.log(array);
          },
        } as CheckboxFormly,
      },
    },
    {
      key: 'checkbox2',
      type: 'checkbox',
      className: 'ant-col  ant-col-24',
      defaultValue: true,
      templateOptions: {
        required: true,
        spanLabelFixed: 100,
        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },
        placeholder: '复选框',
        checkbox: {
          ngModelChange: (value: boolean) => {
            console.log(value);
          },
        } as CheckboxFormly,
      },
    },
    {
      key: 'radio',
      type: 'radio',
      className: 'ant-col  ant-col-24',
      defaultValue: 'Apple',
      templateOptions: {
        required: true,
        label: 'radio',
        type: 'button',
        spanLabelFixed: 100,
        grid: {
          label: {
            span: 6,
          },
          control: {
            span: 18,
          },
        },
        radio: {
          buttonStyle: 'solid',
          name: 'test',
          ngModelChange: (value: any) => {
            console.log(value);
          },
        } as RadioFormly,
        options: of([
          { label: 'Apple', value: 'Apple', disabled: false },
          { label: 'Pear', value: 'Pear', disabled: false },
          { label: 'Orange', value: 'Orange' },
        ]).pipe(delay(100)),
        // options: [
        //   { label: 'Apple', value: 'Apple', disabled: false },
        //   { label: 'Pear', value: 'Pear', disabled: false },
        //   { label: 'Orange', value: 'Orange' },
        // ],
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
