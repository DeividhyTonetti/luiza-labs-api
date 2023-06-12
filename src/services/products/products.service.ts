import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto, PartialUpdateProductDTO, UpdateProductDTO } from '@dtos';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private httpService: HttpService
  ) { }

  private async checkProductIsValid(productId: string): Promise<boolean> {
    try {
      await lastValueFrom(this.httpService.get(`${productId}/`));

      return true;
    } catch (error) {
      return false;
    }
  }

  private async checkExistingProduct(productId: string): Promise<boolean> {
    const existingProduct = await this.prisma.products.findUnique({
      where: { productId },
    });

    return Boolean(existingProduct);
  }

  public async create(createProduct: CreateProductDto): Promise<CreateProductDto> {
    try {
      const productIsValid = await this.checkProductIsValid(createProduct.productId);
      const productExists = await this.checkExistingProduct(createProduct.productId);

      if (!productIsValid) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }

      if (productExists) {
        throw new HttpException('Product with the same ID already exists', HttpStatus.CONFLICT);
      }

      const { customerId, productId, title, price, image, reviewLink } = createProduct;

      const newProduct = await this.prisma.products.create({
        data: {
          customerId,
          productId,
          title,
          price,
          image,
          reviewLink,
        },
      });

      return newProduct;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findAll(): Promise<any> {
    try {
      const products = await this.prisma.products.findMany();
      return products;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findOne(id: string): Promise<any> {
    try {
      const product = await this.prisma.products.findUnique({
        where: { id },
      });
      return product;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async update(id: string, updateProduct: any): Promise<UpdateProductDTO> {
    try {
      const updatedProduct = await this.prisma.products.update({
        data: updateProduct,
        where: { id },
      });
      return updatedProduct;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async patch(id: string, custormerData: PartialUpdateProductDTO): Promise<PartialUpdateProductDTO> {
    try {
      const updatedProduct = await this.prisma.products.update({
        data: custormerData,
        where: { id },
      });
      return updatedProduct;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.customers.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
