import { TemplateRef } from '@angular/core';
import { FunctionProp, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDateMode } from 'ng-zorro-antd/date-picker';


export interface StepsFormly  {
  /**
   * 步骤条类型，有 default 和 navigation 两种
   * @default default
   */
  type?: 'default' | 'navigation';

  /**
   * 指定当前步骤，从 0 开始记数。在子 nz-step 元素中，可以通过 nzStatus 属性覆盖状态
   * @default 0
   */
  current?: number;

  /**
   * 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * 指定标签放置位置，默认水平放图标右侧，可选 vertical 放图标下方
   * @default horizontal
   */
  labelPlacement?: 'vertical' | 'horizontal';

  /**
   * 点状步骤条，可以设置为一个 TemplateRef
   * @default false
   */
  progressDot?: boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>;

  /**
   * 指定大小，目前支持普通（default）和迷你（small）
   * @default 'default'
   */
  size?: 'small' | 'default';

  /**
   * 指定当前步骤的状态，可选 wait process finish error
   * @default 'process'
   */
  status?: 'wait' | 'process' | 'finish' | 'error';

  /**
   * 指定起始位置的序号
   * @default 0
   */
  startIndex?: number;

  /**
   * 点击单个步骤时触发的事件
   * 
   */
  onIndexChange?: (index: number) => void;
}

export interface StepFormly {
  /**
   * 步骤的详情描述，可选
   */
  description?: string | TemplateRef<void>;

  /**
   * 步骤图标的类型，可选
   */
  icon?: string | string[] | Set<string> | { [klass: string]: any; };

  /**
   * 指定当前步骤的状态，可选 wait process finish error
   * @default 'wait'
   */
  status?: 'wait' | 'process' | 'finish' | 'error';

  /**
   * 标题
   */
  title?: string | TemplateRef<void>;

  /**
   * 子标题
   */
  subtitle?: string | TemplateRef<void>;

  /**
   * 禁用点击
   */
  disabled?: boolean;

  /**
   * 当前状态为 process 的步骤所显示的进度条进度（只对基本类型的 nz-steps 生效）
   */
  percentage?: number;
}
