import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface genres_detailAttributes {
  genres_detail_anime_id?: string;
  genres_detail_genre_id?: string;
}

@Table({
  tableName: 'genres_detail',
  schema: 'bookmart_anime',
  timestamps: false,
})
export class genres_detail
  extends Model<genres_detailAttributes, genres_detailAttributes>
  implements genres_detailAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  genres_detail_anime_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  genres_detail_genre_id?: string;
}
