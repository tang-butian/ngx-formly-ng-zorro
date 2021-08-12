# Ngx-Formly-Ng-Zorro

这是[ngx-formly](https://github.com/ngx-formly/ngx-formly)的[ng-zorro](https://github.com/NG-ZORRO/ng-zorro-antd)主题UI，基本保留了zorro组件的所有功能。并添加了transfer、upload两个组件支持formcontrol。

## 使用方法

1. 安装ng-zorro
    ```
    ng add ng-zorro-antd
    ```
2. 安装 ngx-formly
    ```
    ng add @ngx-formly/schematics
    ```
3. 安装 Ngx-Formly-Ng-Zorro
   ```
    npm i ngx-formly-ng-zorro
   ```
4. 配置初始化
   在项目的 app.module.ts 导入 `FormlyNgZorroModule`
    ```
    import { FormlyNgZorroModule } from 'ngx-formly-ng-zorro';

    @NgModule({
        imports: [
            ...
            FormlyModule.forRoot({ extras: { lazyRender: true } }),
            FormlyNgZorroModule
        ],
    })
    export class AppModule { }
    ```
## 例子

### HTML
```
  <form nz-form [formGroup]="form" (ngSubmit)="submit()">
    <formly-form
      [form]="form"
      [model]="model"
      [fields]="fields"
      nz-row
      [nzGutter]="24"
    >
    </formly-form>
  </form>
```
### Input组件
```
import { InputFormly} from 'ngx-formly-ng-zorro/lib/input';
fields: FormlyFieldConfig[] = [
    {
        key: 'input',
        type: 'input',
        className: 'ant-col  ant-col-24',
        templateOptions: {
          label: 'input',   // 密码则是 'password'
          placeholder: 'input',
          required: true,
          spanLabelFixed: 100,  // 设置label宽度
          grid: {       // 设置 label 与输入框的宽度，如果设置了spanLabelFixed 则无效
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
          } as InputFormly,    // ng-zorro的Input组件功能属性在这里配置，更详情请看(https://ng.ant.design/components/input/zh)
        },
      }
]
```
### Number组件

```
import { NumberFormly } from 'ngx-formly-ng-zorro/lib/input';
fields: FormlyFieldConfig[] = [
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
          width: '100%',    // zorro 没有的属性，可设置输入框的宽度
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
        } as NumberFormly,
      },
    }
]
```
### AutoComplete 组件
```
import { AutocompleteFormly } from 'ngx-formly-ng-zorro/lib/input';
fields: FormlyFieldConfig[] = [
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
        } as AutocompleteFormly,
      },
    }
]
```
### Cascader组件
```
import { CascaderFormly } from 'ngx-formly-ng-zorro/lib/cascader';
fields: FormlyFieldConfig[] = [
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
    }
]
```
### Checkbox组件
```
import { CheckboxFormly } from 'ngx-formly-ng-zorro/lib/checkbox';
fields: FormlyFieldConfig[] = [
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
    }
]
```
### Radio组件
```
import { RadioFormly } from 'ngx-formly-ng-zorro/lib/radio';
fields: FormlyFieldConfig[] = [
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
]
```

### Rate组件
```
import { RateFormly } from 'ngx-formly-ng-zorro/lib/rate';
fields: FormlyFieldConfig[] = [
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
        } as RateFormly,
      },
    },
]
```
### Select组件
```
import { SelectFormly } from 'ngx-formly-ng-zorro/lib/select';
fields: FormlyFieldConfig[] = [
{
      key: 'select',
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
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
          mode: 'tags',
          showArrow: true,
          showSearch: true,
          allowClear: true,
          loading: true,
          maxMultipleCount: 2,
        } as SelectFormly,
      },
    }
]
```
### Slider组件
```
import { SliderFormly } from 'ngx-formly-ng-zorro/lib/slider';
fields: FormlyFieldConfig[] = [
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
    }
]
```
### Switch组件
```
import { SwitchFormly } from 'ngx-formly-ng-zorro/lib/switch';
fields: FormlyFieldConfig[] = [
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
    }
]
```
### Date组件
```
import { DateFormly, RangeDateFormly } from 'ngx-formly-ng-zorro/lib/date';
fields: FormlyFieldConfig[] = [
{
      key: 'date',
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
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
    }
]
```
range-date
```
fields: FormlyFieldConfig[] = [
{
      key: 'range-date',
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
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
    }
]
```
```
fields: FormlyFieldConfig[] = [
{
      key: 'range-date2',
      type: 'rangeDate',
      className: 'ant-col  ant-col-24',
      templateOptions: {
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
    }
]
```
### Time组件
```
import { TimeFormly } from 'ngx-formly-ng-zorro/lib/time';
fields: FormlyFieldConfig[] = [
{
      key: 'time',
      type: 'time',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        placeholder: ['123', 'sdf'] as any,
        label: 'time',
        spanLabelFixed: 100,
        time: {
          
        } as TimeFormly,
      },
    }
]
```
### Transfer组件
```
import { TransferItem } from 'ng-zorro-antd/transfer';
fields: FormlyFieldConfig[] = [
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
    }
]
```
### SelectTree组件
```
import { TreeSelectFormly } from 'ngx-formly-ng-zorro/lib/tree-select';
fields: FormlyFieldConfig[] = [
 {
      key: 'tree-select',
      type: 'tree-select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: 'tree-select',
        spanLabelFixed: 100,
        required: true,
        treeSelect: {
          nodes: [
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
            ],
        } as TreeSelectFormly,
      },
    }
]
```
### Upload组件
```
import { UploadFormly } from 'ngx-formly-ng-zorro/lib/upload';
fields: FormlyFieldConfig[] = [
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
          fileList: [
            {
              uid: '1',
              name: 'xxx.png',
              status: 'done',
              response: 'Server Error 500', // custom error message to show
              url: 'http://www.baidu.com/xxx.png',
            },
            {
              uid: '2',
              name: 'yyy.png',
              status: 'done',
              url: 'http://www.baidu.com/yyy.png',
            },
            {
              uid: '3',
              name: 'zzz.png',
              status: 'error',
              response: 'Server Error 500', // custom error message to show
              url: 'http://www.baidu.com/zzz.png',
            },
          ],
          action: 'https://localhost:44310/WeatherForecast',
        } as UploadFormly,
      },
    }
]
```
### Tabs 组件布局
```
import { UploadFormly } from 'ngx-formly-ng-zorro/lib/upload';
fields: FormlyFieldConfig[] = [
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
      }
]
```
### Card 组件布局
```
import { UploadFormly } from 'ngx-formly-ng-zorro/lib/upload';
fields: FormlyFieldConfig[] = [
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
]
```

更详细请看 [app.component.ts](https://github.com/2693252993/ngx-formly-ng-zorro/blob/main/src/app/app.component.ts)及[app.component.html](https://github.com/2693252993/ngx-formly-ng-zorro/blob/main/src/app/app.component.html)