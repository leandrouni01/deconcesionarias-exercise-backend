import { VehiclePropertyController } from '../controllers/VehiclePropertyController';
import express = require('express');
import {BaseRouter} from './BaseRouter'

export class VehiclePropertyRouter extends BaseRouter {
  
  private vehiclePropertyController:VehiclePropertyController;

  constructor() {
    super();
    this.vehiclePropertyController = new VehiclePropertyController();
    this.buildRoutes();
  }

  private async getVehicleProperties(req: express.Request, res:express.Response) {
    const result = await this.vehiclePropertyController.getVehicleProperties();
    return res.json(result)
  }
  
  private async getVehiclePropertyById(req: express.Request, res:express.Response) {
    const id = +req.params.id;
    const result = await this.vehiclePropertyController.getVehiclePropertyById(id);
    return res.json(result)
  }

  private async createVehicleProperty(req: express.Request, res:express.Response) {
    const { name, property_category_FK } = req.body
    const newVehicle = {
      name,
      property_category_FK};
    const result = await this.vehiclePropertyController.createVehicleProperty(newVehicle);
    return res.json(result)
  }

  private async updateVehicleProperty(req: express.Request, res:express.Response) {
    const newVehicle = req.body;
    const result = await this.vehiclePropertyController.updateVehicleProperty(newVehicle);
    return res.json(result);
  }

  private async deleteVehicleProperty(req: express.Request, res:express.Response) {
    const id = +req.params.id
    const result = await this.vehiclePropertyController.deleteVehicleProperty(id);
    return res.json(result)
  }

  private buildRoutes(){
    this.router.get('/', this.getVehicleProperties.bind(this));
    this.router.get('/:id', this.getVehiclePropertyById.bind(this));
    this.router.post('/', this.createVehicleProperty.bind(this));
    this.router.put('/:id', this.updateVehicleProperty.bind(this));
    this.router.delete('/:id', this.deleteVehicleProperty.bind(this));
  }
}