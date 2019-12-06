import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getnews() {
        return '123'
    }

    @Get('id')
    getOnenews(@Param('id') id) {
        return 'this.newsService.getOnenews();'
    }

    @Get('one/:id')
    getWithParamObject(@Param('id') param) {
        return param;
    }

    @Post()
    postNews() {
        return '123'
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteNews(@Param('id') id) {
        return 'OK';
    }
 }