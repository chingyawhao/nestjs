import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { HeroesController } from './controller'
import { KillDragonCommandHandler } from './commands/kill-dragon'
import { DropItemCommandHandler } from './commands/drop-item'
import { GetHeroesHandler } from './queries/get-heroes'
import { HeroesPersistence } from './persistences'
import { KilledDragonHandler } from './persistences/events/killed-dragon'
import { FoundItemHandler } from './persistences/events/found-item'
import { Effects } from './effects'

@Module({
  imports: [CqrsModule],
  controllers: [HeroesController],
  providers: [
    HeroesPersistence,
    ...[KilledDragonHandler, FoundItemHandler],
    ...[KillDragonCommandHandler, DropItemCommandHandler],
    ...[GetHeroesHandler],
    Effects,
  ],
})
export class HeroesModule {}
