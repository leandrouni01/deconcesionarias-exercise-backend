import express = require('express');
import {BaseRouter} from './BaseRouter'

export class VehicleRouter extends BaseRouter {
  private vehicleController: VehicleController;

  constructor() {
    super();
    this.vehicleController = new VehicleController();
    this.buildRoutes();
  }

  private buildRoutes() {
    
  }

}