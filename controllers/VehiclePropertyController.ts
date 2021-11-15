import { VehiclePropertyQuery } from "../queries/VehiclePropertyQuery";
import { IUpdateVehicleProperty } from "../interfaces/VehiclePropertyInterfaces";
import { IVehicleProperty } from "../interfaces/VehiclePropertyInterfaces";

export class VehiclePropertyController {

  private vehiclePropertyQueries: VehiclePropertyQuery;

  constructor() {
    this.vehiclePropertyQueries = new VehiclePropertyQuery();
  }

  public async getVehicleProperties(){
    return await this.vehiclePropertyQueries.getVehicleProperties()
  }
  
  public async getVehiclePropertyById(id:number){
    return await this.vehiclePropertyQueries.getVehiclePropertyById(id);
  }
  
  public async createVehicleProperty(vehicleProperty:IVehicleProperty){
    return await this.vehiclePropertyQueries.createVehicleProperty(vehicleProperty);
  }
  
  public async updateVehicleProperty(vehicleProperty:IUpdateVehicleProperty){
    return await this.vehiclePropertyQueries.updateVehicleProperty(vehicleProperty);
  }
  
  public async deleteVehicleProperty(id:number){
    return await this.vehiclePropertyQueries.deleteVehicleProperty(id);
  }

}