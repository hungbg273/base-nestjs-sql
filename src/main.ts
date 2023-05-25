// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeSwagger } from './shared/swagger.helper';
import * as config from 'config';
import { INestApplication, Logger } from '@nestjs/common';
import { getHost } from './modules/config/config.provider';
import { createLightship } from 'lightship';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await initializeSwagger(app);
  const lightship = await initializeLightship(app);
  await app.listen(config.get<number>('server.port'));
  lightship.signalReady();
}

async function initializeLightship(app: INestApplication) {
  const lightship = createLightship();

  lightship.registerShutdownHandler(async () => {
    await app.close();
  });

  return lightship;
}

bootstrap()
  .then(() => {
    const hostname = getHost();
    Logger.log(
      `Started on http(s)://${hostname}${config.get('service.baseUrl')}`,
    );
    Logger.log(
      `Docs available on http(s)://${hostname}${config.get(
        'service.docsBaseUrl',
      )}`,
    );
  })
  .catch((error) => {
    Logger.error('bootstrap starting error ', error);
  });
