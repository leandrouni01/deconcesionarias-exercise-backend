import {
  Column,
  PrimaryKey,
  Table,
  UpdatedAt,
  AutoIncrement,
  CreatedAt,
  DeletedAt,
  Model,
} from 'sequelize-typescript'

@Table({
  paranoid: true,
  timestamps: true,
})
export class BaseModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date

  @DeletedAt
  deletedAt!: Date
}
