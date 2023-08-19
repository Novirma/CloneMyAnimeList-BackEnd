import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface animeAttributes {
  anime_id?: string;
  title?: string;
  synopsis?: string;
  type?: string;
  episodes?: number;
  episodes_watching?: number;
  status_anime?: string;
  status_watching?: string;
  premiered?: string;
  authors?: string;
  source?: string;
  duration?: number;
  rating?: string;
  url_img?: string;
  id?: number;
}

@Table({ tableName: 'anime', schema: 'bookmart_anime', timestamps: false })
export class anime
  extends Model<animeAttributes, animeAttributes>
  implements animeAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  anime_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  title?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  synopsis?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  type?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  episodes?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  episodes_watching?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  status_anime?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  status_watching?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  premiered?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  authors?: string;

  @Column({ allowNull: true, type: DataType.STRING(50) })
  source?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  duration?: number;

  @Column({ allowNull: true, type: DataType.DECIMAL })
  rating?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  url_img?: string;

  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('bookmart_anime.anime_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'anime_pkey', using: 'btree', unique: true })
  id?: number;
}
