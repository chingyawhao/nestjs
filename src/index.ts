import { NestFactory } from '@nestjs/core'

import { AppModule } from './module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
