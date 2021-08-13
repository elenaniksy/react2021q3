export interface FormControlItemModel {
  value: string;
  type: string;
  label: string;
  errorMessage: string;
  valid: boolean;
  touched: boolean;
  validation: {
    required: boolean;
    minLength?: number;
    checked?: boolean;
  };
}
