import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { UsersModule } from './users/users/users.module';
import { AuthModule } from './auth/auth/auth.module';
import { ProductsModule } from './products/products/products.module';
import { OrdersModule } from './orders/orders/orders.module';
import { EventsModule } from './events/events/events.module';
import { PostsModule } from './posts/posts/posts.module';
import { CommonModule } from './common/common/common.module';
import { ConfigModule } from './config/config/config.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, OrdersModule, EventsModule, PostsModule, CommonModule, ConfigModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
