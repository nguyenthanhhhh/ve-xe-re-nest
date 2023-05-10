import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`/api/v1`);
  app.useGlobalPipes(new ValidationPipe());

  const configSvc = app.get(ConfigService);
  const port = configSvc.get('PORT');
  const config = new DocumentBuilder()
    .setTitle('Ve-xe-re')
    .setDescription('App ve xe re with Nestjs')
    .setVersion('1.0')
    .addTag('vexere')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}
bootstrap();
