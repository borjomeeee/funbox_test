export interface IProductModel {
  id: number;

  type: string;

  title: string;
  subTitle: string;

  descr: string;

  numUnits: number;
  numSurprise: number;
  textData?: string;

  weight: number;

  isDisabled: boolean;
}

export interface IProductModelExtended extends IProductModel {
  isSelected?: boolean;
}
