import { NestFactory, } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as mongoose from 'mongoose'

async function bootstrap() {

  // const uri = "mongodb+srv://juanfrank:Z1gAE9SQVeN0qDjv@braiincluster0.qd5kd.mongodb.net/?retryWrites=true&w=majority&appName=BraiinCluster0";

  try {
    await mongoose.connect('mongodb://mongoadmin:secret@localhost:27017/miapp?authSource=admin')
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoose.disconnect();
  }

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen(5173);
}
bootstrap();