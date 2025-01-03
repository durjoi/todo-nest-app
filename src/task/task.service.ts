import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private todoRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const newTask = {
      task: createTaskDto.task,
      is_completed: false,
    };
    return this.todoRepository.save(newTask);
  }

  findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: number) {
    const task = await this.todoRepository.findOneBy({ id });
    return { message: 'Task found', task: task };
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.todoRepository.update(id, {
      is_completed: updateTaskDto.is_completed,
    });
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
