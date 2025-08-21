import { Column, Entity } from 'typeorm'
import { CommonEntity } from '~/common/entity/common.entity'

@Entity({ name: 'sys_test' })
export class TestingEntity extends CommonEntity {
  @Column({ unique: true })
  nickname: string

  @Column()
  age: number

  @Column({ nullable: true })
  email: string

  @Column({ nullable: true, type: 'tinyint' })
  status: number
}
