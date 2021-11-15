import { PropertyCategory } from "../models/entities/PropertyCategory";
import { IProprertyCategory, IUpdateProprertyCategory } from "../interfaces/PropertyCategoryInterfaces";


export class PropertyCategoryQuery {

  public async getCategories() {
    return await PropertyCategory.findAll()
  }

  public async getCategoryById(id: number) {
    return await PropertyCategory.findOne({
      where: {
        id
      }
    })
  }

  public async createCategory(category: IProprertyCategory) {
    return await PropertyCategory.create(category);
  }

  public async updateCategory(category: IUpdateProprertyCategory) {
    return await PropertyCategory.update(category, {
      where: {
        id: category.id
      }
    })
  }

  public async deleteCategory(id: number) {
    return await PropertyCategory.destroy({
      where: {
        id
      }
    })
  }

}