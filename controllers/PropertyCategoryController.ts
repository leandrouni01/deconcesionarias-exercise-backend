import { PropertyCategoryQuery } from "../queries/PropertyCategoryQuery";
import { IUpdateProprertyCategory, IProprertyCategory } from "../interfaces/PropertyCategoryInterfaces";



export class PropertyCategoryController {

  private propertyCategoryQueries: PropertyCategoryQuery;

  constructor() {
    this.propertyCategoryQueries = new PropertyCategoryQuery();
  }

  public async getCategories() {
    return await this.propertyCategoryQueries.getCategories();
  }

  public async getCategoryById(id:number) {
    return await this.propertyCategoryQueries.getCategoryById(id);
  }

  public async createCategory(category:IProprertyCategory) {
    return await this.propertyCategoryQueries.createCategory(category);
  }

  public async updateCategory(category:IUpdateProprertyCategory) {
    return await this.propertyCategoryQueries.updateCategory(category);
  }

  public async deleteCategory(id:number) {
    return await this.propertyCategoryQueries.deleteCategory(id);
  }


}