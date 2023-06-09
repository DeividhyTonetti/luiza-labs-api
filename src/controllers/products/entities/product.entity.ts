import { Prisma } from '@prisma/client';

export class Product implements Prisma.productsUncheckedCreateInput {
  id?: string;
  customerId: string;
  productId?: string;
  customer: Prisma.customersCreateNestedOneWithoutProductsInput;

  constructor(product?: Partial<Product>) {
		this.id = product.id
		this.customerId = product.customerId
		this.productId = product.productId
		this.customer = product.customer
	}
}
