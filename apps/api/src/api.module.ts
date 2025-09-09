import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// importa aquí tus módulos reales
import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { ProductsModule } from './products/products.module';
// import { OrdersModule } from './orders/orders.module';
// import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    // AuthModule, ProductsModule, OrdersModule, EventsModule ...
  ],
})
export class AppModule {}
