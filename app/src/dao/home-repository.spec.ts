import { TestingModule, Test } from '@nestjs/testing';
import { StrapiApi } from 'strapi-adapter';
import { HomeRepository } from './home-repository';


describe('HomeDao', () => {
  let service: HomeRepository;
  let strapiAdapterSpy = new StrapiApi("")
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeRepository, {provide: StrapiApi, useValue: strapiAdapterSpy}],
    }).compile();

    service = module.get<HomeRepository>(HomeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
