import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { AppService } from '../app.service';

interface IHelloDto {
  /**
   * @format email
   */
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Hello swagger
   * @param dto
   */
  @TypedRoute.Post('hello')
  postHello(@TypedBody() dto: IHelloDto): string {
    console.log('/hello');
    return dto.email;
  }
}
