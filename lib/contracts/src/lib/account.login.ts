import { IsEmail, IsString, Length, Min } from 'class-validator';

export namespace AccountLogin {
  export const topic = 'account.register.command';

  export class Request {
    @IsEmail()
    @IsString()
    email: string;
    @IsString()
    @Length(5)
    password: string;
  }
  export class Response {
    access_token!: string;
  }
}
