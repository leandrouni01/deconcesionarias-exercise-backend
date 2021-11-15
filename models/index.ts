import { Sequelize } from 'sequelize-typescript'
import { PropertyCategory } from './entities/PropertyCategory'
import { PropertyValue } from './entities/PropertyValue'
import { Vehicle } from './entities/Vehicle'
import { VehicleProperty } from './entities/VehicleProperty'

export class Models {
  public sequelize: Sequelize
  constructor(config: any) {
    this.sequelize = new Sequelize(config)
  }

  public initModels() {
    this.sequelize.addModels(this.getModels())
    return this.sequelize.sync({
      force: process.env.NODE_ENV === "test",
      alter: false && process.env.NODE_ENV === "development",
    })
  }

  private getModels() {
    return [ Vehicle, VehicleProperty, PropertyValue, PropertyCategory]
  }
}

export { Sequelize }