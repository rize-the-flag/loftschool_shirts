
document.addEventListener('DOMContentLoaded', function () {

    let wimer = {
        sec: '00',
        min: '00',
        hour: '00',
        isExecuted: false,
        timerId: undefined,
        domTimer: undefined,
        
        init: function(timer){
           this.domTimer = timer;
        },
        
        go: function (){
            this.timerId = setInterval(()=>{
                this.updateTimer(this.domTimer);
            }, 1000);
            this.isExecuted = !this.isExecuted;
            this.updateTimer();
        },

        updateTimer: function (){
            let time = getDateTime();
            this.hour = time[0] < 10 ? '0' + time[0]:time[0];
            this.min = time[1] < 10 ? '0' + time[1]:time[1];
            this.sec = time[2] < 10 ? '0' + time[2]:time[2];
            this.domTimer.querySelector('.hour').firstChild.data = this.hour;
            this.domTimer.querySelector('.minute').firstChild.data =this.min;
            this.domTimer.querySelector('.sec').firstChild.data = this.sec;
        },

        stop: function(){
            if(this.isExecuted) {
                clearInterval(this.timerId);
                this.isExecuted=!this.isExecuted;
            }
        },

        start: function () {
            if(!this.isExecuted) {
                this.go();
            }
        }

};

    let container = document.querySelector('.timmer');
    wimer.init(container);
    wimer.go();

    container.querySelector('.stop').addEventListener('click', ()=>{wimer.stop()});
    container.querySelector('.start').addEventListener('click',  ()=>{wimer.start()});


});

function lea_a(arg) {
    console.log(arg);
}

function getDateTime() {
    let now = new Date();
    return[now.getHours(), now.getMinutes(), now.getSeconds()];
}

