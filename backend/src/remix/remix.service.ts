import { Injectable } from '@nestjs/common';

export interface IRemixService {
  getHello: () => string;
  getApi: () => string;
}

@Injectable()
export class RemixService implements IRemixService {
  public readonly getHello = () => 'Coucou ça va ?!';
  public readonly getApi = () => 'Hello from the backend';
}
