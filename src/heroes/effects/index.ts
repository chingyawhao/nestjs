import { Injectable } from '@nestjs/common'
import { ICommand, ofType, Saga } from '@nestjs/cqrs'
import { Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { DropItemCommand } from '../commands/drop-item'
import { KilledDragonEvent } from '../persistences/events/killed-dragon'

@Injectable()
export class Effects {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(KilledDragonEvent),
      delay(1000),
      map((event) => {
        return new DropItemCommand(event.heroId, 0)
      })
    )
  }
}
