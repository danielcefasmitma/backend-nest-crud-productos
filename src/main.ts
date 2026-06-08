import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger

  const config = new DocumentBuilder()
    .setTitle('CRUD Productos')
    .setDescription('Proyecto de Backend con Nest')
    .setVersion('1.0')
    .addTag('producto')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  //end swagger

  //class validator, esto funciona para todo el proyecto, es decir, para todos los DTOs que tengamos en el proyecto, esto es importante para validar los datos que recibimos en las peticiones, y evitar que se guarden datos incorrectos en la base de datos.
  app.useGlobalPipes(new ValidationPipe({
     disableErrorMessages: false,
     whitelist: true,
     forbidNonWhitelisted: true
  }));
  
  // Habilitar CORS para permitir solicitudes desde el frontend, esto es importante para que el frontend pueda comunicarse con el backend sin problemas de CORS.
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
