import { IPropertyValue } from "../interfaces/PropertyValueInterfaces";
import { PropertyCategory } from "../models/entities/PropertyCategory";
import { PropertyValue } from "../models/entities/PropertyValue";
import { VehicleProperty } from "../models/entities/VehicleProperty";


export class PropertyValueQuery {
  
  public async ratings(vehicleId: number) {
    return await PropertyCategory.findAll({
      include: [
        {
          model: VehicleProperty,
          include: [
            {
              model: PropertyValue,
              where: {
                vehicle_FK: vehicleId
              },
              required:false
            }
          ]
        }
      ]
    })
  }

  public async rate(propValue:IPropertyValue) {
    const propValueDB = await PropertyValue.findOne({
      where:{
        vehicle_FK: propValue.vehicle_FK,
        vehicle_property_FK: propValue.vehicle_property_FK
      }
    })

    if(propValueDB){
      return await propValueDB.update(propValue)
    }

    return await PropertyValue.create(propValue);
  }

  public async deleteRating(vehicleId:number, propId:number) {
    return await PropertyValue.destroy({where: {
      vehicle_FK: vehicleId,
      vehicle_property_FK: propId
    }})
  }
  
}