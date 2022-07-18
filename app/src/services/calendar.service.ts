import { Injectable } from '@nestjs/common';
import { Calendar, CalendarData } from 'calendos';

@Injectable()
export class CalendarService {

    constructor(private calendar: Calendar){}

    getCalendar(): CalendarData {
       return this.calendar.generateCalendarOfMounth();
    }
}
