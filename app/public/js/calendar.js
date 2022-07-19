<<<<<<< HEAD
class CalendarManager {
    currentMounth;
    currentYear;
    calendarContainer;
    arrowNext;
    arrowPrev;

    constructor(calendarContainer){
        this.calendarContainer = calendarContainer;
        this.currentYear = new Date().getFullYear();
        this.currentMounth = new Date().getMonth();
        this.init();
    }

    init(){
        this.arrowNext = this.calendarContainer.querySelector('.calendar-next');
        this.arrowPrev = this.calendarContainer.querySelector('.calendar-prev');
        this.arrowNext.addEventListener('click', this.nextMounth.bind(this));
        this.arrowPrev.addEventListener('click',this.prevMounth.bind(this));
    }

    async nextMounth(){
        this.increment();
        const newCalendar = await this.getNewCalendar();
        this.calendarContainer.innerHTML = newCalendar;
        this.init();
    }

    increment(){
        ++this.currentMounth;
        if(this.currentMounth > 11){
            this.currentMounth = 0;
            ++this.currentYear;
        }
    }
    async prevMounth() {
        if(this.currentMounth === new Date().getMonth()){
            return;
        }
       this.decrement();
        const newCalendar = await this.getNewCalendar();
        this.calendarContainer.innerHTML = newCalendar;
        this.init();
    }

    decrement(){
        --this.currentMounth;
        if(this.currentMounth < 0){
            this.currentMounth = 11;
            --this.currentYear;
        }
    }

    async getNewCalendar(mounth=this.currentMounth, year=this.currentYear) {
        const response = await fetch(`http://localhost:3000/calendar?mounth=${mounth}&year=${year}`);
        const newCalendar = await response.text();
        return newCalendar;
    }

}

window.addEventListener('load', ()=> {
    const calendarContainer = document.querySelector("#calendarContainer");
    const calendarManager = new CalendarManager(calendarContainer);
})
=======
(function(){

    const calendarContainer = document.querySelector('#calendarContainer');
    const arrowNext = document.querySelector('')
})()
>>>>>>> 2bfbca0f1acfba7105e80d07575e743a281ce942
