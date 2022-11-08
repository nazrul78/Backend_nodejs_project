
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogsDocument = Blogs & Document;

@Schema({ timestamps: true, autoIndex: true })
export class Blogs extends Document {
    @Prop({
        required: false,
        
    })
    title: string;
    // -------------------------------
    @Prop({
        required: false,
    })
    description: string;
    // -------------------------------
    @Prop({
        required: false,
    })
    thumbnail: string;
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

export const BlogsSchema = SchemaFactory.createForClass(Blogs);