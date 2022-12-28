import { EventsHandler, IEventHandler } from '@nestjs/cqrs'

export class FoundItemEvent {
  constructor(public readonly heroId: number, public readonly itemId: number) {}
}

@EventsHandler(FoundItemEvent)
export class FoundItemHandler implements IEventHandler<FoundItemEvent> {
  handle(event: FoundItemEvent) {}
}
