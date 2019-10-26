import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

    @Get()
    root(@Res() response): void {
        // the homepage will load our index.html which contains angular logic
        response.sendFile(path.join(__dirname, '..', '/../assets/index.html'));
    }
}
