import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { HeroesPersistence } from '../persistences'

export class KillDragonCommand {
  constructor(readonly heroId: number, readonly dragonId: number) {}
}

@CommandHandler(KillDragonCommand)
export class KillDragonCommandHandler implements ICommandHandler<KillDragonCommand> {
  constructor(private readonly persistence: HeroesPersistence, private readonly publisher: EventPublisher) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command
    const hero = this.publisher.mergeObjectContext(await this.persistence.findOneById(heroId))
    hero.killEnemy(dragonId)
    hero.commit()
  }
}
