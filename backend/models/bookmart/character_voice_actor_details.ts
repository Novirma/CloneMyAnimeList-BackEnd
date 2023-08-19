import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface character_voice_actor_detailsAttributes {
  voice_actor_detail_character_id?: string;
  voice_actor_detail_voice_actor_id?: string;
}

@Table({
  tableName: 'character_voice_actor_details',
  schema: 'bookmart_anime',
  timestamps: false,
})
export class character_voice_actor_details
  extends Model<
    character_voice_actor_detailsAttributes,
    character_voice_actor_detailsAttributes
  >
  implements character_voice_actor_detailsAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  voice_actor_detail_character_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  voice_actor_detail_voice_actor_id?: string;
}
