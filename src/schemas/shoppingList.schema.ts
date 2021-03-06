import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Item } from './item.schema';
import {Document} from 'mongoose';
import { ShoppingListItem } from './shopping-list-item.schema';

export type ShoppingListDocument = ShoppingList & Document;

@Schema()
export class ShoppingList {
  @Prop({required: true})
  user: string

  @Prop({default: new Date(Date.now())})
  createdAt: Date

  @Prop({default: new Date(Date.now())})
  updatedAt: Date

  @Prop({required: true})
  name: string

  @Prop({default: []})
  items: [ShoppingListItem]

  @Prop({default: 'pending'})
  status: 'pending' | 'completed' | 'cancelled'

  @Prop()
  statusUpdateDate: Date

  versionKey: false
  
}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);