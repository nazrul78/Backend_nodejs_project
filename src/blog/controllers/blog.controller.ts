import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { BlogService } from '../services/blog.service';

@Controller('/api/v1')
export class BlogController {

    constructor(private blogService: BlogService) { }

    @Post('/blog')
    @HttpCode(HttpStatus.CREATED)

    addBlog(@Body() body): any {
        return this.blogService.addBlog(body);
    }

    @Get('/blogs')
    @HttpCode(HttpStatus.OK)
    getBlogs(@Query() q) {

        return this.blogService.getBlogs(q);
    }

    @Get('/blog/:id')
    @HttpCode(HttpStatus.OK)
    getBlogById(@Param('id') id) {
        return this.blogService.getBlogById(id);
    }

    @Delete('/blog/:id')
    @HttpCode(HttpStatus.OK)
    deleteBlogById(@Param('id') id) {
        return this.blogService.deleteBlogById(id);
    }

    @Patch('/blog/:id')
    @HttpCode(HttpStatus.OK)
    updateBlogById(@Body() body, @Param('id') id) {
        return this.blogService.updateBlogById(body, id);
    }

}
