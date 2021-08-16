import { FormControlItemModel } from './FormControlItemModel';

export interface FormControlsModel extends Record<string, any> {
  name: FormControlItemModel;
  birthday: FormControlItemModel;
  agree: FormControlItemModel;
}
