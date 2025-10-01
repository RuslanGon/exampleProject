import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Явно указываем путь к файлу .env
dotenv.config({ path: join(__dirname, '..', '.env') });

async function bootstrap() {
  console.log('Mongo URI:', process.env.MONGODB_URI); // отладка
  const app = await NestFactory.create(AppModule);

  // Включаем CORS для фронтенда
  app.enableCors({
    origin: 'http://localhost:5173', // адрес твоего фронта
    credentials: true,
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
