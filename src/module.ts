import { Module } from '@nestjs/common'

import { HeroesModule } from './heroes/module'

@Module({
  imports: [HeroesModule],
})
export class AppModule {}
