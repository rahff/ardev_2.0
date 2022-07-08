import { Test, TestingModule } from '@nestjs/testing';
import { StrapiApi } from 'strapi-adapter';
import { PortfolioRepository } from './portfolio-repository';

describe('PortfolioRepositoryService', () => {
  let service: PortfolioRepository;
  let strapiAdapterSpy = new StrapiApi("")
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioRepository, { provide:StrapiApi, useValue: strapiAdapterSpy }],
    }).compile();

    service = module.get<PortfolioRepository>(PortfolioRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
