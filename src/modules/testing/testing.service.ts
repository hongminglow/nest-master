import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TestingEntity } from './testing.entity'

@Injectable()
export class TestingService {
  constructor(
        @InjectRepository(TestingEntity)
        private readonly testingRepository: Repository<TestingEntity>,
  ) {}

  async findTest(): Promise<TestingEntity[]> {
    return this.testingRepository.find()
  }
}
