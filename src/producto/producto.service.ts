import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
  productos = [
    {
      id: 1,
      nombre: 'Oreo',
      precio: 52,
    },

    {
      id: 2,
      nombre: 'Bombombum',
      precio: 35,
    },

    {
      id: 3,
      nombre: 'Pilfrut',
      precio: 10,
    },
  ];

  listar() {
    return this.productos;
  }

  mostrar(id: number) {
    return this.productos.find((producto) => producto.id === id);
  }

  guardar(datos: any) {
    this.productos.push(datos);
    return {
      mensaje: 'Producto guardado.',
      producto: datos
    };
  }

  eliminar(id: number) {
    const indice: number = this.productos.findIndex(
      (producto) => producto.id === id,
    );
    if (indice !== -1) {
      this.productos.splice(indice, 1);
      return { mensaje: 'Producto eliminado', eliminado: id };
    }
    return { mensaje: 'No se encontro el producto', producto: id };
  }

  modificar(id: number, datos: any) {
    const producto = this.productos.find((producto) => producto.id === id);
    if (!producto) {
      return null;
    }

    Object.assign(producto, datos);

    return producto;
  }
}
