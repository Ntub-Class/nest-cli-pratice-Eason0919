import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './service/student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
