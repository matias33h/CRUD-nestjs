import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {
  id: number;
  nombre: string;
  detalle: string;
  precio: number;
  stock: number;
}
