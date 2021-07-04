import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {
  AutocompleteFormly,
  InputFormly,
  InputGroupFormly,
  NumberFormly,
} from 'projects/formly-ng-zorro/src/lib/input';

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
      key: 'salesMan',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '业务员',
        placeholder: '',
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
      },
    },
    {
      key: 'salesMan1',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '组测试',
        placeholder: '123123123123123',
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
      key: 'salesMan2',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'password',
        label: '组测试',
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
      key: 'salesMan3',
      type: 'number',
      className: 'ant-col  ant-col-24',
      // defaultValue: 2,
      templateOptions: {
        label: '测试number',
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
        max: 3,
        min: 1,
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
        label: '测试autoComplete',
        placeholder: '测试autoComplete',
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
          modelChange: (value: any[]) => {
            console.log(value);
          },
        },
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
