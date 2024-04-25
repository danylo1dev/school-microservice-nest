import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export namespace AccountRegister {
  export const topic = 'account.register.command';

  export class Request {
    @IsEmail()
    @IsString()
    email!: string;
    @IsString()
    @Length(5)
    password!: string;
    @IsOptional()
    @IsString()
    displayName?: string;
  }
  export class Response {
    email!: string;
  }
}
