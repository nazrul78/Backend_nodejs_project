import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';


import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductsSchema } from './schemas/Product.schema';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductsSchema }
        ])
    ],
    controllers: [
        ProductController,],
    providers: [
        ProductService,],
})
export class ProductModule {

    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //         .apply(AuthMiddleware)
    //         .forRoutes({ path: '/', method: RequestMethod.ALL });
    // }
}
