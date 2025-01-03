import { IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  is_completed: boolean;
}
