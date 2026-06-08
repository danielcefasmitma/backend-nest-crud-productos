import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //Aqui se importa el modulo de producto, y se configura la conexion a la base de datos con TypeORM, en este caso se usa Postgres.
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'bd_productos_nest',
      autoLoadEntities: true,
      synchronize: true // Esto es para que TypeORM sincronice la base de datos con las entidades, no se recomienda en producción.
    })
    ,ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
