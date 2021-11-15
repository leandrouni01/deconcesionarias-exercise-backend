import { IUpdateVehicleProperty, IVehicleProperty } from "../interfaces/VehiclePropertyInterfaces";
import { PropertyCategory } from "../models/entities/PropertyCategory";
import { VehicleProperty } from "../models/entities/VehicleProperty";


export class VehiclePropertyQuery {

  public async getVehicleProperties() {
    return await VehicleProperty.findAll(
      {
        include: [
          {
            model: PropertyCategory
          }
        ]
      }
    )
  }

  public async getVehiclePropertyById(id: number) {
    return await VehicleProperty.findOne({
      where: {
        id: id
      }
    })
  }

  public async createVehicleProperty(vehicleProperty: IVehicleProperty) {
    return await VehicleProperty.create(vehicleProperty)
  }

  public async updateVehicleProperty(vehicleProperty: IUpdateVehicleProperty) {
    return await VehicleProperty.update(vehicleProperty, {
      where: {
        id: vehicleProperty.id
      }
    })
  }

  public async deleteVehicleProperty(id: number) {
    return await VehicleProperty.destroy({
      where: {
        id: id
      }
    })
  }

}