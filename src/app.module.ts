import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [ClientModule, ProductModule, CommandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
