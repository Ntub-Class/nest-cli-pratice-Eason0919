import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { StudentService } from './service/student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}


 @Get()
 getStudent() {
     return '123'
 }


 @Get('id')
 getOneStudent(@Param('id') id) {
     return 'this.studentService.getOnestudent();'
 }

 @Get('one/:id')
 getWithParamObject(@Param('id') param) {
     return param;
 }

 @Post()
 postStudent() {
     return '123'
 }

 @Put(':id')
 putStudent(@Body() body, @Param('id') id) {
     return 'OK';
 }

 @Delete(':id')
 deleteStudent(@Param('id') id) {
     return 'OK';
 }
}