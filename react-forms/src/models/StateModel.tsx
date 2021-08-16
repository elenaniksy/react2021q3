import { FormControlsModel } from './FormControlsModel';

export interface StateModel {
  selectCountry: string;
  gender: string;
  isFormValid: boolean;
  formControls: FormControlsModel;
}
