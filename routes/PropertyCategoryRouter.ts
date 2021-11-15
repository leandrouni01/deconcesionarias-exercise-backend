import { PropertyCategoryController } from '../controllers/PropertyCategoryController';
import express = require('express');
import {BaseRouter} from './BaseRouter'

export class PropertyCategoryRouter extends BaseRouter {
  private propertyCategoryController:PropertyCategoryController;

  constructor() {
    super();
    this.propertyCategoryController = new  PropertyCategoryController();
    this.buildRoutes();
  }

  private async getCategories(req: express.Request, res:express.Response) {
    const result = await this.propertyCategoryController.getCategories();
    return res.json(result)
  }

  private async getCategoryById(req: express.Request, res:express.Response) {
    const id = +req.params.id
    const result = await this.propertyCategoryController.getCategoryById(id)
    return res.json(result)
  }

  private async createCategory(req: express.Request, res:express.Response) {
    const {name, icon} = req.body;
    const category = {name, icon};
    const result = await this.propertyCategoryController.createCategory(category);
    return res.json(result)
  }

  private async updateCategory(req: express.Request, res:express.Response) {
    const category = req.body; 
    const result = await this.propertyCategoryController.updateCategory(category)
    return res.json(result)
  }

  private async deleteCategory(req: express.Request, res:express.Response) {
    const id = +req.params.id
    const result = await this.propertyCategoryController.deleteCategory(id);
    return res.json(result)
  }

  private buildRoutes() {
    this.router.get('/', this.getCategories.bind(this))
    this.router.get('/:id', this.getCategoryById.bind(this))
    this.router.post('/', this.createCategory.bind(this))
    this.router.put('/:id', this.updateCategory.bind(this))
    this.router.delete('/:id', this.deleteCategory.bind(this))
  }
}