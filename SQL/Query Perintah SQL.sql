insert into bookmart_anime.premiered (
	premier_id,
	name
)
	VALUES(
	'pr-1',
	'summer-2023'
);

select * from bookmart_anime.premiered;
select count (premier_id) from bookmart_anime.premiered;
SELECT premier_id FROM bookmart_anime.premiered WHERE id = (SELECT MAX(id) FROM bookmart_anime.premiered);


insert into bookmart_anime.


select * from bookmart_anime.genres order by id;
select count (*) from bookmart_anime.genres;

select genre_id from bookmart_anime.genres

update bookmart_anime.genres
set name_genre = 'Action Updated', information = 'Genre yang di penuhi Aksi Pertarungan yang sangat epic Updated'
where genre_id = 'genre-001';

select * from bookmart_anime.anime

TRUNCATE table bookmart_anime.anime;

ALTER SEQUENCE bookmart_anime.anime_id_seq RESTART WITH 1;

select pg_get_serial_sequence('bookmart_anime.anime','id');

select * from bookmart_anime.genres_detail;
select * from bookmart_anime.genres where name_genre = 'Romance' order by genre_id;

select * from bookmart_anime.genres order by genre_id;

select genres_detail_anime_id from bookmart_anime.genres_detail where id = (select max(id) from bookmart_anime.genres_detail)








