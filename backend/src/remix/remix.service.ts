import { Injectable } from '@nestjs/common';

export interface IRemixService {
  getHello(): string;
}

@Injectable()
export class RemixService implements IRemixService {
  public readonly getHello = () => 'Coucou ça va ?!';
}
