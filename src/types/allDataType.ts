export interface ICategoryDataType {
  id: string
  slug: string
  nameBn: string
  icon: string
}

export interface IProductDataType {
  id: number
  slug: string
  nameBn: string
  category: string
  categoryNameBn: string
  categoryIcon: string
  unit: string
  image: string
  today: number
  yesterday: number
  lastWeek: number
  lastMonth: number
  change: IMarketChangeDataType
  markets: IMarketsDataType[]
}

export interface IMarketChangeDataType {
  dir: string
  pct: number
}

export interface IMarketsDataType {
  market: string
  division: string
  min: number
  max: number
}

export interface IUnitBangla {
  kg: string;
  g?: string;
  litre?: string;
  ml?: string;
  dozen?: string;
  piece?: string;
}

export interface ISignUpDataType {
  name?: string
  email: string
  password: string
  confirmPassword?: string
}
