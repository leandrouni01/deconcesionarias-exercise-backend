import { VehicleController } from '../controllers/VehicleControler';
import express = require('express');
import {BaseRouter} from './BaseRouter'

export class VehicleRouter extends BaseRouter {
  private vehicleController: VehicleController;

  constructor() {
    super();
    this.vehicleController = new VehicleController();
    this.buildRoutes();
  }

  private async getVehicles(req: express.Request, res:express.Response) {
    const vehicles = await this.vehicleController.getVehicles();

    return res.json(vehicles)
  }

  private async getVehicleById(req: express.Request, res:express.Response) {
    const id = +req.params.id;
    const vehicles = await this.vehicleController.getVehicleById(id);
    return res.json(vehicles)
  }

  private async createVehicle(req: express.Request, res:express.Response) {
    const name:string = req.body.name;
    const newVehicle = await this.vehicleController.createVehicle({name});
    return res.json(newVehicle);
  }
  
  private async updateVehicle(req: express.Request, res:express.Response) {
    const id:number = +req.params.id;
    const name:string = req.body.name;
    const updatedVehicle = await this.vehicleController.updateVehicle({name, id});
    return res.json(updatedVehicle);
  }

  private async deleteVehicle(req: express.Request, res:express.Response) {
    const id:number = +req.params.id;
    await this.vehicleController.deleteVehicle(id);
    return res.send(true)
  } 

  private buildRoutes() {
    this.router.get('/', this.getVehicles.bind(this));
    this.router.get('/:id', this.getVehicleById.bind(this));
    this.router.post('/', this.createVehicle.bind(this));
    this.router.put('/:id', this.updateVehicle.bind(this));
    this.router.delete('/:id', this.deleteVehicle.bind(this));
  }

}