import { Prisma } from '@prisma/client';

export class Product implements Prisma.productsUncheckedCreateInput {
  id?: string;
  customerId: string;
  productId?: string;
  title: string;
  price: string;
  image: string;
  reviewLink: string;
  customer: Prisma.customersCreateNestedOneWithoutProductsInput;

  constructor(product?: Partial<Product>) {
		this.id = product.id
		this.customerId = product.customerId
		this.productId = product.productId
		this.customer = product.customer
    this.title = product.title
    this.price = product.price
    this.image = product.image
    this.reviewLink = product.reviewLink
	}
}
