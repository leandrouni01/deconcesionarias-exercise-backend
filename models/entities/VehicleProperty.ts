import { AllowNull, BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { BaseModel } from './BaseModel';
import { PropertyCategory } from './PropertyCategory';

@Table
export class VehicleProperty extends BaseModel{

  @AllowNull(false)
  @Column
  name: string;

  @ForeignKey(() => PropertyCategory)
  @Column
  property_category_FK:number

  @BelongsTo(() => PropertyCategory)
  property_category: PropertyCategory
}