CREATE table bookmart_anime.genres (
	genre_id VARCHAR(30),
	name_genre VARCHAR(100),
	information TEXT
)

alter table bookmart_anime.genres add column id serial;

CREATE table bookmart_anime.genres_detail (
	genres_detail_anime_id VARCHAR(30),
	genres_detail_genre_id VARCHAR(30)
)
alter table bookmart_anime.genres_detail add column id serial;

CREATE table bookmart_anime.anime (
	anime_id varchar(30),
	title VARCHAR(255),
	synopsis TEXT,
	type VARCHAR(30),
	episodes INT,
	episodes_watching INT,
	status_anime VARCHAR(100),
	status_watching VARCHAR(100),
	premiered VARCHAR(100),
	authors VARCHAR(100),
	source VARCHAR(50),
	duration INT,
	rating NUMERIC
)

alter table bookmart_anime.anime add column url_img VARCHAR(255);
alter table bookmart_anime.anime add column id serial;

CREATE table bookmart_anime.premiered (
	premier_id VARCHAR(30),
	name VARCHAR(100)
)

CREATE table bookmart_anime.characters (
	character_id VARCHAR(30),
	name VARCHAR(255),
	character_anime_id VARCHAR(30),
	details TEXT
)

CREATE table bookmart_anime.character_voice_actor_details (
	voice_actor_detail_character_id VARCHAR(30),
	voice_actor_detail_voice_actor_id VARCHAR(30)
)

CREATE table bookmart_anime.voice_actors (
	voice_actor_id VARCHAR(30),
	name VARCHAR(255),
	languages VARCHAR(100)
)



