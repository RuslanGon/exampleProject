import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('email') email: string) {
    if (!email) {
      return { error: 'Email required' };
    }
    return this.authService.login(email);
  }
}
