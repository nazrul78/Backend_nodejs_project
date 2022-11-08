
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blogs, BlogsDocument } from '../schemas/blog.schema';

@Injectable()
export class BlogService {

    constructor(
        @InjectModel(Blogs.name) private blogModel: Model<BlogsDocument>,
    ) { }

    async addBlog(
        body

    ) {
        try {
            console.log(body);
            const blogData = new this.blogModel(body);
            const blog = await blogData.save();

            return {
                msg: 'Blog added successfully',
                data: blog,
                success: true,
            };
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }

    async getBlogs(q) {
        try {
            const blogs = await this.blogModel
                .find()
                .exec();
            return {
                msg: 'Show all blogs',
                data: blogs,
                success: true,
            };
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }

    async getBlogById(id: any) {
        try {
            return await this.blogModel.findById(id).exec();
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }
    async deleteBlogById(id: any) {
        try {
            return await this.blogModel.findByIdAndDelete(id).exec();
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }

    async updateBlogById(body: any, id: any) {
        try {
            const blog = await this.blogModel
                .findByIdAndUpdate(id, body, { new: true })
                .exec();

            return {
                msg: 'Blog updated successfully',
                data: blog,
                success: true,
            };
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }
}
