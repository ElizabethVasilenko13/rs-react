interface Measurement {
  value: number;
  unit: string;
}

interface Temp extends Measurement {}

interface Amount extends Measurement {}

export interface BeerApiResp {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Measurement;
  boil_volume: Measurement;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Temp;
  twist: null | string;
}

export interface MashTemp {
  temp: Temp;
  duration: number;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Malt {
  name: string;
  amount: Amount;
}

export interface Hop {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}
