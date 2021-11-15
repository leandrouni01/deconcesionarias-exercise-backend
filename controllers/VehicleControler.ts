import { VehicleQuery } from "../queries/VehicleQuery";
import { IUpdateVehicle, IVehicle } from "../interfaces/VehicleInterfaces";


export class VehicleController {

  private vehicleQueries: VehicleQuery;

  constructor() {
    this.vehicleQueries = new VehicleQuery();
  }

  public async getVehicles() {
    return await this.vehicleQueries.getVehicles();
  }

  public async getVehicleById(id:number) {
    return await this.vehicleQueries.getVehicleById(id);
  }

  public async createVehicle(vehicle:IVehicle){
    return await this.vehicleQueries.createVehicle(vehicle)
  }

  public async updateVehicle(vehicle:IUpdateVehicle){
    return await this.vehicleQueries.updateVehicle(vehicle)
  }

  public async deleteVehicle(id:number){
    return await this.vehicleQueries.deleteVehicle(id)
  }

}