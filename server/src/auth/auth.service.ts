import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async sendVerificationEmail(email: string) {
    // Ищем пользователя или создаем нового
    let user = await this.userModel.findOne({ email });
    if (!user) {
      user = new this.userModel({ email });
    }

    // Создаем токен для подтверждения
    const token = crypto.randomBytes(32).toString('hex');
    user.verificationToken = token;
    await user.save();

    // Настраиваем nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,      // твой email
        pass: process.env.EMAIL_PASSWORD,  // пароль приложения Gmail
      },
    });

    const verificationLink = `http://localhost:5173/verify/${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify your email',
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    };

    await transporter.sendMail(mailOptions);

    return { message: `Verification email sent to ${email}` };
  }

  async verifyEmail(token: string) {
    const user = await this.userModel.findOne({ verificationToken: token });
    if (!user) {
      return { error: 'Invalid token' };
    }

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();

    return { message: 'Email verified successfully' };
  }
}
