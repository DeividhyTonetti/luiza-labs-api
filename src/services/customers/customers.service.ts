import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import {
  CreateCustomerDTO,
  PartialUpdateCustomerDTO,
  UpdateCustomerDTO,
} from '@dtos';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({ name, email }: CreateCustomerDTO) {
    try {
      const newCustomer = await this.prisma.customers.create({
        data: {
          name,
          email,
        },
      });
      return newCustomer;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findAll() {
    try {
      const customers = await this.prisma.customers.findMany();
      return customers;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findOne(id: string) {
    try {
      const customer = await this.prisma.customers.findUnique({
        where: { id },
      });
      return customer;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async update(id: string, customerData: UpdateCustomerDTO) {
    try {
      const updatedCustomer = await this.prisma.customers.update({
        data: customerData,
        where: { id },
      });
      return updatedCustomer;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async patch(id: string, customerData: PartialUpdateCustomerDTO) {
    try {
      const updatedCustomer = await this.prisma.customers.update({
        data: customerData,
        where: { id },
      });
      return updatedCustomer;
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async remove(id: string) {
    try {
      await this.prisma.customers.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
