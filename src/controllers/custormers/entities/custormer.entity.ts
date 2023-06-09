import { Prisma } from '@prisma/client';

export class Customer implements Prisma.customersUncheckedCreateInput {
  id?: string;
  name: string;
  email: string;
  products?: Prisma.productsCreateNestedManyWithoutCustomerInput;

  constructor(custumer?: Partial<Customer>) {
		this.id = custumer.id
		this.name = custumer.name
		this.email = custumer.email
		this.products = custumer.products
	}
}