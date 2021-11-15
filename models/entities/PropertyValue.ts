import { AllowNull, BelongsTo, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './BaseModel';
import { Vehicle } from './Vehicle';
import { VehicleProperty } from './VehicleProperty';

@Table({tableName: "property_values"})
export class PropertyValue extends BaseModel {

  @AllowNull(false)
  @Column
  value!: number;

  @ForeignKey(() => Vehicle)
  @Column
  vehicle_FK!:number

  @BelongsTo(() => Vehicle)
  vehicle!: Vehicle

  @ForeignKey(() => VehicleProperty)
  @Column
  vehicle_property_FK!:number

  @BelongsTo(() => VehicleProperty)
  vehicle_property!: VehicleProperty

}