import { Test, TestingModule } from '@nestjs/testing';
import { StrapiApi } from 'strapi-adapter';
import { QuoteRepository } from './quote-repository';

describe('QuoteRepository', () => {
  let service: QuoteRepository;
  let strapiAdapterSpy = new StrapiApi("")
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteRepository, { provide:StrapiApi, useValue: strapiAdapterSpy }],
    }).compile();

    service = module.get<QuoteRepository>(QuoteRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});