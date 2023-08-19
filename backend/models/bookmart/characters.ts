import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface charactersAttributes {
  character_id?: string;
  name?: string;
  character_anime_id?: string;
  details?: string;
}

@Table({ tableName: 'characters', schema: 'bookmart_anime', timestamps: false })
export class characters
  extends Model<charactersAttributes, charactersAttributes>
  implements charactersAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  character_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  character_anime_id?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  details?: string;
}
