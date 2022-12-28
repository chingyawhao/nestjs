import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { HeroesPersistence } from '../persistences'

export class GetHeroesQuery {}

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly persistence: HeroesPersistence) {}

  async execute(query: GetHeroesQuery) {
    return this.persistence.findAll()
  }
}
