import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosModule } from './productos.module';
@Controller('productos')
export class ProductosController {
  constructor(private productosService: ProductosService) {}

  @Get()
  async findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productosService.findOne(id);
  }

  @Post()
  async create(@Body() producto: ProductosModule) {
    return this.productosService.create(producto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() producto: ProductosModule) {
    return this.productosService.update(id, producto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productosService.delete(id);
  }
}