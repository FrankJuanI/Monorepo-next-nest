import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsString()
    name: string
    @IsString()
    description? : string
    finishDate?: Date
    @IsBoolean()
    allDay?: boolean
    prioruty?: 'high' | 'medium' | 'low'
}
