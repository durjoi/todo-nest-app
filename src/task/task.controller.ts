import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    // this will return all the tasks
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    // this will update the task with the id of the parameter
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // this will delete the task with the id of the parameter
    return this.taskService.remove(+id);
  }
}
