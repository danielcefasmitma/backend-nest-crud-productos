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

  //class validator, esto funciona para todo el proyecto
  app.useGlobalPipes(new ValidationPipe({
     disableErrorMessages: false,
     whitelist: true,
     forbidNonWhitelisted: true
  }));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
