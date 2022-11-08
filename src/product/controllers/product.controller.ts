import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CreateProductDTO } from '../dto/create.product.dto';
import { ProductService } from '../services/product.service';

@Controller('/api/v1')
export class ProductController {




    constructor(private productService: ProductService) { }

    @Post('/products')
    @HttpCode(HttpStatus.CREATED)

    addProduct(@Body() body: CreateProductDTO) {
        return this.productService.addProduct(body);
    }


    @Get('/products')
    @HttpCode(HttpStatus.OK)
    getBlogs(@Query() q) {

        return this.productService.getProducts(q);
    }

    @Get('/products/:id')
    @HttpCode(HttpStatus.OK)
    getBlogById(@Param('id') id) {
        return this.productService.getProductById(id);
    }

    @Delete('/products/:id')
    @HttpCode(HttpStatus.OK)
    deleteBlogById(@Param('id') id) {
        return this.productService.deteteProductsById(id);
    }
}


