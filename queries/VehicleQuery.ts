import { NotFoundError } from "../errors/NotFoundError";
import { IUpdateVehicle } from "../interfaces/VehicleInterfaces";
import { IVehicle } from "../interfaces/VehicleInterfaces";
import { Vehicle } from "../models/entities/Vehicle";

export class VehicleQuery {

  public async getVehicles() {
    return await Vehicle.findAll();
  }

  public async getVehicleById(id:number) {
    return await Vehicle.findByPk(id)
  }

  public async createVehicle(vehicle:IVehicle){
    return await Vehicle.create(vehicle)
  }

  public async updateVehicle(vehicle:IUpdateVehicle){
    return await Vehicle.update(vehicle,{where:{
      id: vehicle.id
    }})
  }

  public async deleteVehicle(id:number){
    const vehicleToDelete = await Vehicle.findByPk(id)
    if(!vehicleToDelete) throw new NotFoundError("Vehicle does not exist");

    return await vehicleToDelete.destroy()
  }
}