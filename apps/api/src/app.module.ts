import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongoadmin:secret@localhost:27017/miapp?authSource=admin'), TaskModule, UserModule],
  providers: [],
})

export class AppModule {}


