import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { BaseDto, BaseFindDto } from './base.dto';

@Injectable()
export class BaseService {
  constructor(private usersRepository: BaseRepository) {}
  getAll = (baseDto: BaseFindDto) => {
    const findParam: any = {};
    findParam.where = {
      ...baseDto,
      isActive: baseDto.isActive ? Boolean(baseDto.isActive) : undefined,
    };
    console.log(findParam);
    return this.usersRepository.findBy(findParam);
  };

  createNewUser = (baseDto: BaseDto) => {
    return this.usersRepository.create({
      ...baseDto,
      isActive: Boolean(baseDto.isActive),
    });
  };
}
