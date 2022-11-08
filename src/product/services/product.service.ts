import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from '../dto/create.product.dto';
import { Product, ProductsDocument } from '../schemas/product.schema';

@Injectable()
export class ProductService {


    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductsDocument>,
    ) { }

    async addProduct(
        body: CreateProductDTO

    ) {
        try {
            console.log(body);
            const productData = new this.productModel(body);
            const product = await productData.save();

            return {
                msg: 'Product added successfully',
                data: product,
                success: true,
            };
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }



    async getProducts(q) {
        try {
            const products = await this.productModel
                .find()
                .limit(10)
                .skip(Number(q['skip']))
                .exec();
            return {
                msg: 'Show all products',
                data: products,
                success: true,
            };
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }



    async getProductById(id: any) {
        try {
            return await this.productModel.findById(id).exec();
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }


    async deteteProductsById(id: any) {
        try {
            return await this.productModel.findByIdAndDelete(id).exec();
        } catch (e) {
            console.log(e);
            return { error: e.message, status: HttpStatus.BAD_REQUEST };
        }
    }


    async updateProductById(body: any, id: any) {
        try {
            const product = await this.productModel.findByIdAndUpdate(id, body, { new: true }).exec();
            return {
                mes: 'Product updated auccessfully.',
                data: Product,
                success: true,
            };
        } catch (error) {
            console.log(error);
            return { error: error.message, status: HttpStatus.BAD_REQUEST };
        }
    }
}
