* Mempersiapkan Data Base dan ERD nya
* Mempersiapkan BackEnd Berupa NestJS dengan query di terminal :
	- npm i -g @nestjs/cli
	- nest new backend
* Mempersiapkan main.ts
* Menggenerate src Module,Controller,Service DLL di terminal :
	- nest g res bookmart
* Hubungkan BackEnd dengan DataBase :
	- Install sequelize-typescript
	- Install sequelize-typescript-generator
	- Jalankan PgScriptnya "stg -D postgres -d minpro_lab -u postgres -x root -h localhost -p 5432 -o models/bootcamp -s bootcamp -i"
* Mempersiapkan Models dan Sequelize Query :
	- Sequelize Query disiapkan dengan impor dan memasukkannya ke constructor di dalam service
* Membuat BackEnd Method CRUD untuk Tabel Premiered :
	- Dengan Query Terminal 'nest g res premiered'
	- Pada Module import 'SequelizeModule'
	- Pada service import Sequelize from 'sequelize-typescript'
* Membuat BackEnd Method CRUD untuk Tabel Genres :
	- Dengan Query Terminal 'nest g res genres'
	- Pada Module import 'SequelizeModule'
	- Pada service import Sequelize from 'sequelize-typescript'


--Mempersiapkan FrontEnd Dengan FrameWork NextJS

* Buatlah Folder Shared untuk membuat Menu Side Bar,Top Bar ataupun Foot Bar Aplikasi
* Install segala library yang di perlukan



