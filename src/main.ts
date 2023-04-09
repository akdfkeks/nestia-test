import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './configs/SwaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup the swagger - [Get] : /docs
  SwaggerConfig(app);

  await app.listen(3000);
}
bootstrap();
