import { AllowNull, Column, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './BaseModel';
import { PropertyValue } from './PropertyValue';

@Table({tableName: "vehicles"})
export class Vehicle extends BaseModel {

  @AllowNull(false)
  @Column
  name!: string;

  @HasMany(() => PropertyValue)
  properties!:PropertyValue[];
  
}