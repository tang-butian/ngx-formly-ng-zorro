import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { CardFormly } from 'projects/formly-ng-zorro/src/lib/card';
import { CascaderFormly } from 'projects/formly-ng-zorro/src/lib/cascader';
import { CheckboxFormly } from 'projects/formly-ng-zorro/src/lib/checkbox';
import {
  DateFormly,
  RangeDateFormly,
} from 'projects/formly-ng-zorro/src/lib/date';
import {
  AutocompleteFormly,
  InputFormly,
  InputGroupFormly,
  NumberFormly,
  TextAreaFormly,
} from 'projects/formly-ng-zorro/src/lib/input';
import { RadioFormly } from 'projects/formly-ng-zorro/src/lib/radio';
import { RateFormly } from 'projects/formly-ng-zorro/src/lib/rate';
import { SelectFormly } from 'projects/formly-ng-zorro/src/lib/select';
import { SliderFormly } from 'projects/formly-ng-zorro/src/lib/slider';
import { SwitchFormly } from 'projects/formly-ng-zorro/src/lib/switch';
import { TabFormly, TabsFormly } from 'projects/formly-ng-zorro/src/lib/tabs';
import { TimeFormly } from 'projects/formly-ng-zorro/src/lib/time';
import { TransferFormly } from 'projects/formly-ng-zorro/src/lib/transfer';
import { TreeSelectFormly } from 'projects/formly-ng-zorro/src/lib/tree-select';
import { UploadFormly } from 'projects/formly-ng-zorro/src/lib/upload';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  @ViewChild('characterZhLetter', { static: true })
  characterZhLetter: TemplateRef<any>;
  fields: FormlyFieldConfig[];
  list: TransferItem[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    this.fields = [
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
        key: 'textarea',
        type: 'textarea',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          label: 'textarea',
          required: true,
          spanLabelFixed: 100,
          textarea: {
            maxCharacterCount: 100,
          } as TextAreaFormly,
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
          //   placeholder: 'cascader',
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
      {
        key: 'rate',
        type: 'rate',
        className: 'ant-col  ant-col-24',

        templateOptions: {
          required: true,
          label: 'rate',

          spanLabelFixed: 100,
          grid: {
            label: {
              span: 6,
            },
            control: {
              span: 18,
            },
          },
          rate: {
            allowHalf: true,
            character: this.characterZhLetter,
          } as RateFormly,
        },
      },
      {
        key: 'select',
        type: 'select',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,
          placeholder: '123123123123',
          label: 'select',
          multople: true,
          spanLabelFixed: 100,
          // options: [
          //   { label: 'Apple', value: 'Apple', disabled: true },
          //   { label: 'Apple2', value: 'Apple2', disabled: true, hide: true },
          //   { label: 'Pear', value: 'Pear', disabled: false },
          //   {
          //     label: 'Orange',
          //     value: 'Orange',
          //   },
          // ],
          options: of([
            { label: 'Apple', value: 'Apple', disabled: false },
            { label: 'Pear', value: 'Pear', disabled: false },
            { label: 'Orange', value: 'Orange' },
          ]).pipe(delay(100)),
          select: {
            //  mode: 'tags',

            showArrow: false,
            showSearch: true,
            allowClear: true,
            loading: false,
            maxMultipleCount: 2,
          } as SelectFormly,
        },
      },

      {
        key: 'slider',
        type: 'slider',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,
          placeholder: '123123123123',
          label: 'slider',

          spanLabelFixed: 100,
          slider: {} as SliderFormly,
        },
      },
      {
        key: 'switch',
        type: 'switch',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,
          placeholder: '123123123123',
          label: 'switch',

          spanLabelFixed: 100,
          switch: {} as SwitchFormly,
        },
      },
      {
        key: 'date',
        type: 'date',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,
          placeholder: '123123123123',
          label: 'date',

          spanLabelFixed: 100,
          date: {
            mode: 'date',
            onOpenChange: (value: boolean) => {
              console.log(value);
            },
            onOk: (value: Date) => {
              console.log(value);
            },
          } as DateFormly,
        },
      },
      {
        key: 'range-date',
        type: 'date',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,
          type: 'range',
          placeholder: ['123', 'sdf'] as any,
          label: 'range-date',

          spanLabelFixed: 100,
          range: {
            mode: 'date',
            onOpenChange: (value: boolean) => {
              console.log(value);
            },
            onOk: (value: Date) => {
              console.log(value);
            },
          } as RangeDateFormly,
        },
      },
      {
        key: 'range-date2',
        type: 'rangeDate',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,

          placeholder: ['123', 'sdf'] as any,
          label: 'range-date2',

          spanLabelFixed: 100,
          range: {
            mode: 'date',
            onOpenChange: (value: boolean) => {
              console.log(value);
            },
            onOk: (value: Date) => {
              console.log(value);
            },
          } as RangeDateFormly,
        },
      },
      {
        key: 'time',
        type: 'time',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          //  required: true,

          placeholder: ['123', 'sdf'] as any,
          label: 'time',

          spanLabelFixed: 100,
          time: {
            suffixIcon: this.characterZhLetter,
          } as TimeFormly,
        },
      },
      {
        key: 'transfer',
        type: 'transfer',
        className: 'ant-col  ant-col-24',
        defaultValue: ['1', '2', '3'],
        templateOptions: {
          label: 'transfer',
          spanLabelFixed: 100,
          required: true,
          transfer: {
            dataSource: this.list,
            targetKeys: ['4', '5'],
            resutlMap: (items: TransferItem[]) => {
              return items.map((x) => x.key);
            },
          } as TransferFormly,
        },
      },

      {
        key: 'tree-select',
        type: 'tree-select',
        className: 'ant-col  ant-col-24',

        templateOptions: {
          label: 'tree-select',
          spanLabelFixed: 100,
          required: true,
          treeSelect: {
            nodes: this.nodes,
          } as TreeSelectFormly,
        },
      },
      {
        key: 'upload',
        type: 'upload',
        className: 'ant-col  ant-col-24',
        defaultValue: [1, 2, 3, 4],
        templateOptions: {
          label: 'upload',
          spanLabelFixed: 100,
          required: true,
          upload: {
            action: 'https://localhost:44310/WeatherForecast1',
          } as UploadFormly,
        },
      },
      {
        className: 'ant-col  ant-col-24',

        fieldGroupClassName: 'ant-row',
        templateOptions: {
          card: {
            title: 'kwkw',
          } as CardFormly,
        },
        wrappers: ['card'],
        fieldGroup: [
          {
            className: 'ant-col  ant-col-12',

            type: 'input',
            key: 'firstName',
            templateOptions: {
              label: 'First Name',
            },
          },
          {
            className: 'ant-col  ant-col-12',
            type: 'input',
            key: 'lastName',
            templateOptions: {
              label: 'Last Name',
            },
          },
        ],
      },
      {
        type: 'tabs',
        templateOptions: {
          tabs: {
            tabPosition: 'bottom',
          } as TabsFormly,
        },
        fieldGroup: [
          {
            templateOptions: {
              label: 'Personal data',

              tab: {
                disabled: true,
              } as TabFormly,
            },
            fieldGroup: [
              {
                key: 'firstname',
                type: 'input',
                templateOptions: {
                  label: 'First name',
                  required: true,
                },
              },
              {
                key: 'age',
                type: 'input',
                templateOptions: {
                  type: 'number',
                  label: 'Age',
                  required: true,
                  number: {
                    formatter: (value: number) => value,
                  } as NumberFormly,
                },
              },
            ],
          },
          {
            templateOptions: { label: 'Destination' },
            fieldGroup: [
              {
                key: 'country',
                type: 'input',
                templateOptions: {
                  label: 'Country',
                  required: true,
                },
              },
            ],
          },
          {
            templateOptions: { label: 'Day of the trip' },
            fieldGroup: [
              {
                key: 'day',
                type: 'date',
                templateOptions: {
                  type: 'date',
                  label: 'Day of the trip',
                  required: true,
                },
              },
            ],
          },
        ],
      },
      {
        // type: 'input-group',
        wrappers: ['input-group'],
        className: 'ant-col  ant-col-24',

        templateOptions: {
          label: 'input-group',
          required: true,
          spanLabelFixed: 100,
        },
        // validation: { show: false },
        fieldGroup: [
          {
            type: 'input',
            key: 'inputtest1',
            templateOptions: {
              required: true,
            },
            expressionProperties: {},
          },
          {
            type: 'input',
            key: 'inputtest2',
            templateOptions: {
              required: true,
            },
          },
        ],
      },
    ];
  }

  submit() {
    console.log(this.form.valid);
    console.log(this.form);

    alert(JSON.stringify(this.model));
  }

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true },
          ],
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }],
        },
      ],
    },
  ];
}
