import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, minLength } from 'class-validator';

export class CreateProductoDto {
  // Decorador de swagger para que las propiedades sean visibles.
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Oreo',
    minLength: 5,
    maxLength: 50,
    required: true,
  })
  // Decoradores de class-validator
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser un string' })
  @MinLength(3, {message: 'El nombre debe tener al menos 3 caracteres'})
  @MaxLength(50, {message: 'El nombre debe tener maximo 50 caracteres'})
  nombre!: string;

  @ApiProperty({
    description: 'Unidades del producto',
    example: 15,
    minLength: 5,
    maxLength: 50,
    required: true,
  })
  @IsNotEmpty({ message: 'Las unidades son requeridas' })
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Las unidades deben ser un numero' })
  unidades?: number;

  @ApiProperty({
    description: 'Precio del producto',
    example: 30,
    minLength: 5,
    maxLength: 50,
    required: true,
  })
  @IsNotEmpty( { message: 'El precio es requerido' })
  @IsNumber( { allowNaN: false, allowInfinity: false }, { message: 'El precio debe ser un numero' })
  precio?: number;
}
