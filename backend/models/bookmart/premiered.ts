import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface premieredAttributes {
  premier_id?: string;
  name?: string;
  id?: number;
}

@Table({ tableName: 'premiered', schema: 'bookmart_anime', timestamps: false })
export class premiered
  extends Model<premieredAttributes, premieredAttributes>
  implements premieredAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  premier_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;

  @Column({
    primaryKey: true,
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('bookmart_anime.premiered_id_seq'::regclass)",
    ),
  })
  id?: number;
}
