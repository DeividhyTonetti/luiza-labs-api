import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '@services';
import { CreateProductDto, PartialUpdateProductDTO, UpdateProductDTO } from '@dtos';
import * as faker from 'faker';


describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const createProductDto: CreateProductDto = {
        customerId: 'fa03289c-2216-4fa2-9a96-049581918309',
        productId: '4bd442b1-4a7d-2475-be97-a7b22a08a024',
        title: faker.commerce.product(),
        price: faker.commerce.price({ min: 100, dec: 0, symbol: 'R$' }),
        image: faker.image.url(),
        reviewLink: faker.internet.url();
      };

      const expectedResult = {}; 

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createProductDto);

      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createProductDto);
    });
  });

  describe('findAll', () => {
    it('should return all products', async () => {
      const expectedResult = {}; 

      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

      const result = await controller.findAll();

      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return the specified product', async () => {
      const id = '';
      const expectedResult = {};

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      const result = await controller.findOne(id);

      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('partialUpdate', () => {
    it('should partially update the specified product', async () => {
      const id = '';
      const updateProduct: PartialUpdateProductDTO = {
        
      };

      const expectedResult = {}; 

      jest.spyOn(service, 'patch').mockResolvedValue(expectedResult);

      const result = await controller.partialUpdate(id, updateProduct);

      expect(result).toEqual(expectedResult);
      expect(service.patch).toHaveBeenCalledWith(id, updateProduct);
    });
  });

  describe('update', () => {
    it('should update the specified product', async () => {
      const id = '';
      const updateProduct: UpdateProductDTO = {
      
      };

      const expectedResult = {}; 

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

      const result = await controller.update(id, updateProduct);

      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(id, updateProduct);
    });
  });

  describe('remove', () => {
    it('should remove the specified product', async () => {
      const id = '1';

      jest.spyOn(service, 'remove');

      await controller.remove(id);

      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
