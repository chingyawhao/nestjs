import { EventsHandler, IEventHandler } from '@nestjs/cqrs'

export class KilledDragonEvent {
  constructor(public readonly heroId: number, public readonly dragonId: number) {}
}

@EventsHandler(KilledDragonEvent)
export class KilledDragonHandler implements IEventHandler<KilledDragonEvent> {
  handle(event: KilledDragonEvent) {}
}
