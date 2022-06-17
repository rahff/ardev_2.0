import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHello(url: string): string {
    return `${url}Hello world !`;
  }
}
