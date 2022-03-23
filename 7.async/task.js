class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, action, id){
        if (isNaN(id)){
            throw new Error("введите id");
        } else if (this.alarmCollection.some((element) =>element.id == id)){
                console.error("id существует");
                return;
            }
        
        this.alarmCollection.push({
            id:id,
            time:time,
            callback: action
        })
    }
    removeClock(id){
        let startLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((element) =>element.id != id);
        let finishLength = this.alarmCollection.length;
        return startLength != finishLength
        
    }

    start(){
        if (this.timerId != null){
            return;
        }
        
        let interval = setInterval( () => {
            this.alarmCollection.forEach(item => checkClock(item));
        },
            5000
        );
        this.timerId = interval;

        const checkClock = (item) => {       
            if (this.getCurrentFormattedTime() === item.time) {
                return item.callback();
            }
        };
    }

    stop(){
        if(this.timerId == null){
            return;
        }
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms(){
        console.log("Печать всех будильников в количестве:" + this.alarmCollection.length);
        this.alarmCollection.forEach((clock) => console.log(clock.time, clock.id));
    }

    clearAlarms(){
        this.alarmCollection = [];
        this.stop();
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
 
    }
}