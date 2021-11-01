import { AllowNull, Column, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './BaseModel';
import { VehicleProperty } from './VehicleProperty';

@Table({tableName: "property_categories"})
export class PropertyCategory extends BaseModel {

  @AllowNull(false)
  @Column
  name:string;

  @AllowNull(false)
  @Column
  icon:string

  @HasMany(() => VehicleProperty)
  vehicle_properties: VehicleProperty[];
  
}