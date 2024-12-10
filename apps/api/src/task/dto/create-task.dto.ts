import { IsBoolean, IsDate, IsEmail, IsString } from "class-validator"

export class CreateTaskDto {
    @IsString()
    name: string
    @IsString()
    description? : string
    finishDate?: Date
    @IsBoolean()
    allDay?: boolean
    prioruty?: 'high' | 'medium' | 'low'
}
