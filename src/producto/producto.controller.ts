import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductoService } from "./producto.service";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller()
export class ProductoController{
    //Inyeccion de dependencia, del service de producto.
    constructor(private readonly productoService: ProductoService){}

    @Post("/producto")
    //Aqui estamos usando el DTO
    guardarProducto(@Body() datos: CreateProductoDto){
        return this.productoService.guardar(datos);
    }
    @Delete("/producto/:id")
    eliminarProducto(@Param('id') id: string){
        return this.productoService.eliminar(+id);
    }

    @Put("/producto/:id")
    modificarProducto(@Param('id') id: string, @Body() datos: CreateProductoDto){
        return this.productoService.modificar(+id, datos);
    }

    
    @Get("/producto")
    listarProducto(){
        return this.productoService.listar();
    }

    @Get("/producto/:id")
    mostrarProducto(@Param('id') id: number){
        return this.productoService.mostrar(+id);
    }
}