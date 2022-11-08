import { BlogService } from './services/blog.service';
import { BlogController } from './controllers/blog.controller';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Blogs, BlogsSchema } from './schemas/blog.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Blogs.name, schema: BlogsSchema }
        ])
    ],
    controllers: [
        BlogController,],
    providers: [
        BlogService,],
})
export class BlogModule { }
