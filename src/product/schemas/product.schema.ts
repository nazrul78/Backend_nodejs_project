
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// import * as zillur from '@nestjs/mongoose';

export type ProductsDocument = Product & Document;

@Schema({ timestamps: true, autoIndex: true })
export class Product extends Document {
    @Prop({
        required: false,

    })
    productName: string;
    // -------------------------------
    @Prop({
        required: false,
    })
    productDescription: string;
    // -------------------------------
    @Prop({
        required: false,
    })
    productThumbnail: string;
    // -------------------------------

    @Prop({
        required: false,
    })
    isActive: boolean;
    // -------------------------------

    @Prop({
        required: false,
    })
    loves: string;
    // -------------------------------

    @Prop({
        required: false,
    })
    userName: string;
    // -------------------------------
}

export const ProductsSchema = SchemaFactory.createForClass(Product);