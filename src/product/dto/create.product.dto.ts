import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { isBooleanObject } from 'util/types';

export class CreateProductDTO {
    @Length(5, 20)
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    productDescription: string;

    @IsNotEmpty()
    productThumbnail: string;
}