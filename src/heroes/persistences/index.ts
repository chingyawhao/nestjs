import { Injectable } from '@nestjs/common'
import { Hero } from './models/hero'

const heroes = [new Hero(0)]

@Injectable()
export class HeroesPersistence {
  async findOneById(id: number) {
    return heroes.find((hero) => hero.id === id)
  }
  async findAll() {
    return heroes
  }
}
