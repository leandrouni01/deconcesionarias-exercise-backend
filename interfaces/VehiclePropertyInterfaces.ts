export interface IVehicleProperty {
  name:string;
  property_category_FK:number;
}

export interface IUpdateVehicleProperty {
  id:number;
  name:string;
  property_category_FK:number;
}