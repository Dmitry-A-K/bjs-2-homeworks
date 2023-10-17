class AlarmClock {
    alarmCollection = []
    intervalId = null

    constructor() {

    }

    addClock(time, action) { 

      if (!time || !action) {
        throw new Error('Отсутствуют обязательные аргументы');
      } else {
         if (this.alarmCollection.findIndex((collection) => collection.time == time) > -1) {
            console.warn('Уже присутствует звонок на это же время');
         }
         const bell = {};
         bell.time = time;
         bell.callback = action;
         bell.canCall = true;
         this.alarmCollection.push(bell);
      }

    }

    removeClock(time) {
      do {
        const index = this.alarmCollection.findIndex((collection) => collection.time == time);
        if (index > -1) this.alarmCollection.splice(index, 1);
      } while (this.alarmCollection.findIndex((collection) => collection.time == time) > -1);
    }

    getCurrentFormattedTime() {
      let date = new Date();
      const hour = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      return hour + ":" + minutes;
    }

    start() {

        if (this.intervalId != null) { 
            return;
        } else {
          this.alarmCollection.forEach(item => {
            const action = item.callback;
            if (item.time == this.getCurrentFormattedTime() && item.canCall == true){
              item.canCall = false;
              this.intervalId = setInterval(action(), 1000)
              console.info("пуск функции {" + action + "} intervalId {" + this.intervalId + "}");
            }   
          });
        }

    }

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    resetAllCalls() {
      this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}
