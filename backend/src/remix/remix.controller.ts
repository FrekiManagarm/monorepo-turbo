import { All, Controller, Next, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { createRequestHandler } from '@remix-run/express';
import { getServerBuild } from '@biume/frontend';
import { RemixService } from './remix.service';

@Controller()
export class RemixController {
  constructor(private readonly remixService: RemixService) {}

  @All('*')
  async handler(
    @Req() request: Request,
    @Res() response: Response,
    @Next() next: NextFunction,
  ) {
    return createRequestHandler({
      build: await getServerBuild(),
      getLoadContext: () => ({
        remixService: this.remixService,
      }),
    })(request, response, next);
  }
}
