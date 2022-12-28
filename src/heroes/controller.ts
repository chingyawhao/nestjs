import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { KillDragonCommand } from './commands/kill-dragon'
import { Hero } from './persistences/models/hero'
import { GetHeroesQuery } from './queries/get-heroes'

@Controller('hero')
export class HeroesController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Post(':id/kill')
  async killDragon(
    @Param('id') id: string,
    @Body()
    dto: {
      dragonId: string
    }
  ) {
    return this.commandBus.execute(new KillDragonCommand(+id, +dto.dragonId))
  }

  @Get('')
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery())
  }
}
