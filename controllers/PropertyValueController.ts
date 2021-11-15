import { PropertyValueQuery } from "../queries/PropertyValueQuery";
import { IPropertyValue } from "../interfaces/PropertyValueInterfaces";


export class PropertyValueController {

  private propertyValueQueries:PropertyValueQuery;

  constructor() {
    this.propertyValueQueries = new PropertyValueQuery();
  }

  public async ratings(vehicleId:number) {
    return await this.propertyValueQueries.ratings(vehicleId);
  }

  public async rate(propValue:IPropertyValue) {
    return await this.propertyValueQueries.rate(propValue);
  }

  public async deleteRating(vehicleId:number, propId:number) {
    return await this.propertyValueQueries.deleteRating(vehicleId, propId);
  }

}