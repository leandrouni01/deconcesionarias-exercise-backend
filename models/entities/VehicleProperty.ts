import { AllowNull, BelongsTo, Column, ForeignKey, HasOne, Table } from 'sequelize-typescript';
import { BaseModel } from './BaseModel';
import { PropertyCategory } from './PropertyCategory';
import { PropertyValue } from './PropertyValue';

@Table({tableName:'vehicle_properties'})
export class VehicleProperty extends BaseModel{

  @AllowNull(false)
  @Column
  name!: string;

  @ForeignKey(() => PropertyCategory)
  @Column
  property_category_FK!:number

  @HasOne(() => PropertyValue)
  value!:PropertyValue;

  @BelongsTo(() => PropertyCategory, {onDelete: "RESTRICT"})
  property_category!: PropertyCategory
}