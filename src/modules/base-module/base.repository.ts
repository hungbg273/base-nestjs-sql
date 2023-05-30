import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { User } from './base.entity';

@Injectable()
export class BaseRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findBy(option?: FindManyOptions): Promise<User[]> {
    return this.usersRepository.find(option);
  }

  findOne(option?: FindOneOptions): Promise<User | null> {
    return this.usersRepository.findOne(option);
  }

  create(document?: User): Promise<User> {
    return this.usersRepository.save(document);
  }
}
