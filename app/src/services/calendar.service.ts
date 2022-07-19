import { BadRequestException, Injectable } from '@nestjs/common';
import { Calendar, CalendarData } from 'calendos';

@Injectable()
export class CalendarService {

    constructor(private calendar: Calendar){}

    getCalendar(mounthIndex: string = new Date().getMonth().toString(), 
                year: string = new Date().getFullYear().toString())
                : CalendarData {
        try {
            const index = Number(mounthIndex);
            const yearIndex = Number(year)
            return this.calendar.generateCalendarOfMounth(index, yearIndex);
        } catch (error) {
            throw new BadRequestException("invalid parameter");
        }
    }
}
