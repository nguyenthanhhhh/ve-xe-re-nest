import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ve-xe-re')
    .setDescription('App ve xe re with Nestjs')
    .setVersion('1.0')
    .addTag('vexere')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(4000, () => {
    console.log('http://localhost:4000');
  });
}
bootstrap();
