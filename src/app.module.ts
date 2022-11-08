import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './product/middlewares/logger.middleware';
import { AuthMiddleware } from './product/middlewares/auth.middleware';
import { ProductController } from './product/controllers/product.controller';

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // MulterModule.register(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      // useCreateIndex: true,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      autoIndex: true,
      // useFindAndModify: false,
      keepAlive: true,
      tls: true,
    }),
    BlogModule,],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(ProductController);
  }

}
