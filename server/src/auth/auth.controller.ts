import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-verification')
  async sendVerification(@Body('email') email: string) {
    if (!email) return { error: 'Email required' };
    return this.authService.sendVerificationEmail(email);
  }

  @Get('verify/:token')
  async verify(@Param('token') token: string) {
    return this.authService.verifyUser(token);
  }
}
