
import { Prop, Schema as nestMongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema } from 'mongoose';
import { User } from './user.schema';


export type TaskDocument = HydratedDocument<Task>;

@nestMongooseSchema()
export class Task {
  @Prop()
  name: string
  @Prop()
  description? : string
  @Prop()
  finishDate?: Date
  @Prop()
  allDay?: boolean
  @Prop()
  prioruty?: 'high' | 'medium' | 'low'
  @Prop({type: Schema.Types.ObjectId, ref: 'User'})
  user: User
}

export const CatSchema = SchemaFactory.createForClass(Task);
