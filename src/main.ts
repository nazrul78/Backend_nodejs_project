import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import 'dotenv/config';
import express = require('express');
import { ValidationPipe } from '@nestjs/common';
const localtunnel = require('localtunnel');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(express.urlencoded({ limit: '20mb', extended: true }));
  app.use(express.json({ limit: '20mb' }));

  app.enableCors();

  // Use for validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
  console.log('\x1b[34m', `Server is running on ${process.env.PORT}`);
  await runTunnel();
}

const runTunnel = (async () => {
  const tunnel = await localtunnel({ port: process.env.PORT, subdomain: process.env.SUB_DOMAIN });


  console.log('\x1b[32m', `Api Url is ${tunnel.url}`);


  tunnel.on('close', () => {
    tunnel.close();
    // tunnels are closed
  });
});


bootstrap();
