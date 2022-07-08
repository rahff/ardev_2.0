import { TestingModule, Test } from '@nestjs/testing';
import { HomeRepository } from './home-repository';


describe('HomeDao', () => {
  let service: HomeRepository
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeRepository],
    }).compile();

    service = module.get<HomeRepository>(HomeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
