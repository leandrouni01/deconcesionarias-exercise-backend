import { PropertyValueController } from '../controllers/PropertyValueController';
import express = require('express');
import {BaseRouter} from './BaseRouter'

export class PropertyValueRouter extends BaseRouter {
  private propertyValueController:PropertyValueController;

  constructor() {
    super();
    this.propertyValueController = new  PropertyValueController();
    this.buildRoutes();
  }

  private async listRatings(req: express.Request, res:express.Response){
    const vehicleId = +req.params.id;
    const result =  await this.propertyValueController.ratings(vehicleId);

    return res.json(result)
  }

  private async rate(req: express.Request, res:express.Response) {
    const { id } = req.params
    const {value,  vehicle_property_FK} = req.body;
    const propValue = {value, vehicle_FK: +id, vehicle_property_FK};
    const result = await this.propertyValueController.rate(propValue);
    return res.json(result)
  }

  private async deleteRating(req: express.Request, res:express.Response) {
    const vehicleId = +req.params.id;
    const propId = +req.body.propId
    const result = this.propertyValueController.deleteRating(vehicleId, propId);
    return res.json(result)
  }


  private buildRoutes() {
    this.router.get('/:id', this.listRatings.bind(this));
    this.router.post('/:id', this.rate.bind(this));
    this.router.delete('/:id', this.deleteRating.bind(this));
  }
}