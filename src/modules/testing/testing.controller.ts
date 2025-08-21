import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiSecurityAuth } from '~/common/decorators/swagger.decorator'
import { TestingService } from './testing.service'

@ApiTags('Testing - API 测试')
@ApiSecurityAuth()
@Controller('test')
export class TestingController {
  constructor(private testingService: TestingService) {}

  @Get()
  @ApiOperation({ summary: '获取测试数据' })
  async findAll() {
    return this.testingService.findTest()
  }
}
