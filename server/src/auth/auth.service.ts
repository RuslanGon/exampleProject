import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async login(email: string) {
    let user = await this.userModel.findOne({ email });

    if (!user) {
      user = new this.userModel({ email });
      await user.save();
    }

    const payload = { sub: user._id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
