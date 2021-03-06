import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import { Category } from './category.schema';
import { User } from './user.schema';

export type ItemDocument = Item & Document

@Schema({ versionKey: false })
export class Item {
  @Prop({required: true})
  name: string
  
  @Prop({required: true})
  category: string

  @Prop({ type: Types.ObjectId })
  user: string

  @Prop()
  description: string

  @Prop()
  extraNote: string

  @Prop()
  image: string

  @Prop()
  unitPrice: number

  @Prop({default: 'pcs'})
  unitMeasure: string

  versionKey: false
}

export const ItemSchema = SchemaFactory.createForClass(Item);