import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable() // El decorador @Injectable() indica que esta clase puede ser inyectada como una dependencia en otros componentes de NestJS.
export class ProductoService {
  constructor(
    @InjectRepository(Producto) // Inyecta el repositorio de Producto para interactuar con la base de datos
    private readonly productoRepository: Repository<Producto>, // El repositorio de Producto se utiliza para realizar operaciones CRUD en la base de datos
  ) {}

  listar() {
    return this.productoRepository.find();
  }

  mostrar(id: number) {
    return this.productoRepository.findOneBy({id});
  }

  guardar(datos: CreateProductoDto) {
    const producto = this.productoRepository.create(datos); // Crea una nueva instancia de Producto a partir del DTO
    return this.productoRepository.save(producto); // Guarda el producto en la base de datos y devuelve el producto guardado
  }

  eliminar(id: number) {
    return this.productoRepository.delete(id); // Elimina el producto con el ID especificado de la base de datos
  }

  modificar(id: number, datos: UpdateProductoDto) { 
    return this.productoRepository.update(id, datos); // Actualiza el producto con el ID especificado con los nuevos datos proporcionados
  }
}
