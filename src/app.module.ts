import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';

@Module({
  //Aqui se importa el modulo de producto.
  imports: [ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
