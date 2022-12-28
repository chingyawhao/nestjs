import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { HeroesPersistence } from '../persistences'

export class DropItemCommand {
  constructor(public readonly heroId: number, public readonly itemId: number) {}
}

@CommandHandler(DropItemCommand)
export class DropItemCommandHandler implements ICommandHandler<DropItemCommand> {
  constructor(private readonly persistence: HeroesPersistence, private readonly publisher: EventPublisher) {}

  async execute(command: DropItemCommand) {
    const { heroId, itemId } = command
    const hero = this.publisher.mergeObjectContext(await this.persistence.findOneById(+heroId))
    hero.addItem(itemId)
    hero.commit()
  }
}
