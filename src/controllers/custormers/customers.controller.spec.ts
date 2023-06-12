import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from '@services';
import { ValidationPipe } from '@nestjs/common';
import { CreateCustomerDTO, PartialUpdateCustomerDTO, UpdateCustomerDTO } from '@dtos';

describe('CustomersController', () => {
  let controller: CustomersController;
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
    service = module.get<CustomersService>(CustomersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new customer', async () => {
      const createCustomerDto: CreateCustomerDTO = {
  
      };

      const expectedResult = {};

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createCustomerDto);

      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createCustomerDto);
    });
  });

  describe('findAll', () => {
    it('should return all customers', async () => {
      const expectedResult = {};

      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

      const result = await controller.findAll();

      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return the specified customer', async () => {
      const id = '1';
      const expectedResult = {};

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      const result = await controller.findOne(id);

      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('partialUpdate', () => {
    it('should partially update the specified customer', async () => {
      const id = '1';
      const updateCustomerDto: PartialUpdateCustomerDTO = {
       
      };

      const expectedResult = {};

      jest.spyOn(service, 'patch').mockResolvedValue(expectedResult);

      const result = await controller.partialUpdate(id, updateCustomerDto);

      expect(result).toEqual(expectedResult);
      expect(service.patch).toHaveBeenCalledWith(id, updateCustomerDto);
    });
  });

  describe('update', () => {
    it('should update the specified customer', async () => {
      const id = '1';
      const updateCustomerDto: UpdateCustomerDTO = {
       
      };

      const expectedResult = {};

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

      const result = await controller.update(id, updateCustomerDto);

      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(id, updateCustomerDto);
    });
  });

  describe('remove', () => {
    it('should remove the specified customer', async () => {
      const id = '1';

      jest.spyOn(service, 'remove');

      await controller.remove(id);

      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
