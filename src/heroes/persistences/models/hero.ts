import { AggregateRoot } from '@nestjs/cqrs'
import { KilledDragonEvent } from '../events/killed-dragon'
import { FoundItemEvent } from '../events/found-item'

export class Hero extends AggregateRoot {
  constructor(readonly id: number) {
    super()
  }

  killEnemy(enemyId: number) {
    this.apply(new KilledDragonEvent(this.id, enemyId))
  }

  addItem(itemId: number) {
    this.apply(new FoundItemEvent(this.id, itemId))
  }
}
