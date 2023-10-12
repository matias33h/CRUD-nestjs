// productos.service.ts
import { Injectable } from '@nestjs/common';
import { ProductosModule } from './productos.module';

@Injectable()
export class ProductosService {
  private productos: ProductosModule[] = [];

  findAll(): ProductosModule[] {
    return this.productos;
  }

  findOne(id: number): ProductosModule {
    return this.productos.find((producto) => producto.id === id);
  }

  create(producto: ProductosModule): ProductosModule {
    producto.id = this.productos.length + 1;
    this.productos.push(producto);
    return producto;
  }

  update(id: number, producto: ProductosModule): ProductosModule {
    const index = this.productos.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.productos[index] = producto;
      return producto;
    }
  }

  delete(id: number): void {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }
}
