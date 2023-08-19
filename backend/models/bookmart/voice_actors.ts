import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface voice_actorsAttributes {
  voice_actor_id?: string;
  name?: string;
  languages?: string;
}

@Table({
  tableName: 'voice_actors',
  schema: 'bookmart_anime',
  timestamps: false,
})
export class voice_actors
  extends Model<voice_actorsAttributes, voice_actorsAttributes>
  implements voice_actorsAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  voice_actor_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  languages?: string;
}
