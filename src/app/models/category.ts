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

export interface TV {
    id?: number;
    category_id?: number;
    sub_category: string;
    brand_name?: string;
    model_name?: string;
    model_number?: string;
    picture?: string;
    released_at?: string;
    display_size?: string;
    display_resolution?: string;
    smart_tv?: boolean;
    is_3d?: boolean;
    has_recevier?: boolean;
    hdmi_ports?: number;
    usb_ports?: number;
    price?: number;
}

export interface Laptop {
    id?: number;
    category_id?: number;
    sub_category: string;
    brand_name?: string;
    model_name?: string;
    model_number?: string;
    picture?: string;
    released_at?: string;
    operating_system?: string;
    display_size?: string;
    display_resolution?: string;
    cpu?: string;
    gpu?: string;
    ram?: string;
    storage?: string;
    battery_capacity?: number;
    price?: number;
}

export interface Product {
    id?: number;
    category_id?: number;
    sub_category?: string;
    brand_name?: string;
    model_name?: string;
    model_number?: string;
    picture?: string;
    released_at?: string;
    operating_system?: string;
    screen_size?:       string;
    display_size?: string;
    display_resolution?: string;
    cpu?: string;
    gpu?: string;
    ram?: string;
    storage?: string;
    battery_capacity?: number;
    price?: number;
    is_smart?: boolean;
    power_source?: string;
    blade_material?: string;
    shoe_size?: string;
    capacity?: string;
    water_consumption?: string;
    noise_level?: string;
    has_mic?: boolean;
}