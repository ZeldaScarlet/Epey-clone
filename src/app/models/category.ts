export class Categorys{
    id!:number;
    category_name!:string;
    sub!:Array<SubCategories>;
}
export class Category {
    constructor(public id: number, public category_name: string, public sub: SubCategories[] = []) {}
  }


class SubCategories{
    name!:string;
    categories?:string[];
}

export interface Phones {
    id?:                 number;
    category_id?: number;
    sub_category?: string;
    brand_name?:         string;
    model_name?:         string;
    model_number?: string;
    picture?:            string;
    released_at?:        string;
    os?:                 string;
    storage?:            string;
    screen_size?:       string;
    display_resolution?: string;
    ram?:                string;
    chipset?:            string;
    battery_capacity?:   number;
    battery_type?:       string;
    sim_slot?:     number;
    fingerprint?: boolean;
    price?: number;
}