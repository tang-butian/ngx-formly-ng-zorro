export interface CheckboxFormly {
  /**
   * 选中变化时回调
   */
  ngModelChange?: (
    value: boolean | Array<{ label: string; value: string; checked?: boolean }>
  ) => void;
}
