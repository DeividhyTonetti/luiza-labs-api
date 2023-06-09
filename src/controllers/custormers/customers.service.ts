import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';

import { CreateCustomerDTO } from 'src/dtos/customer/create-customer.dto';
import { PartialUpdateDTO } from 'src/dtos/customer/partial-update-customer.dto';
import { UpdateCustomerDTO } from 'src/dtos/customer/update-customer.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CustomersService {
  constructor(
    private readonly prisma: PrismaService,
    private httpService: HttpService
  ) {}

  async create({ name, email }: CreateCustomerDTO) {
    return await this.prisma.customers.create({
      data: {
        name,
        email
      }
    })
  }

  async findAll() {
    const teste = await lastValueFrom(this.httpService.get('1bf0f365-fbdd-4e21-9786-da459d78dd1f/'))

    console.log('======> ', teste.data)
    return await this.prisma.customers.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.customers.findUnique({
      where: { id }
    })
  }

  async update(id: string, custormerData: UpdateCustomerDTO) {
    return await this.prisma.customers.update({
      data: custormerData,
      where: { id }
    })
  }

  async patch(id: string, custormerData: PartialUpdateDTO) {
    return await this.prisma.customers.update({
      data: custormerData,
      where: { id }
    })
  }

  async remove(id: string) {
    return await this.prisma.customers.delete({
      where: { id }
    })
  }
}
