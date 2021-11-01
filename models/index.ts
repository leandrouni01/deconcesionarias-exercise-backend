import { Sequelize } from 'sequelize-typescript'

export class Models {
  public sequelize: Sequelize
  constructor(config: any) {
    this.sequelize = new Sequelize(config)
  }

  public initModels() {
    this.sequelize.addModels(this.getModels())
    return this.sequelize.sync({
      force: process.env.NODE_ENV === "test",
      alter: false && process.env.NODE_ENV === "devlopment",
    })
  }

  private getModels() {
    return []
  }
}

export { Sequelize }