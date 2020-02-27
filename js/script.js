
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

        getCurrentTime: function () {
            let now = new Date();
            return {
                Hours: now.getHours(),
                Minutes: now.getMinutes(),
                Seconds: now.getSeconds()
            };
        },


        go: function (){
            this.timerId = setInterval(()=>{
                this.updateTimer(this.domTimer);
            }, 1000);
            this.isExecuted = !this.isExecuted;
            this.updateTimer();
        },

        updateTimer: function (){
            let time = this.getCurrentTime();
            this.hour = time['Hours'] < 10 ? '0' + time['Hours']:time['Hours'];
            this.min = time['Minutes'] < 10 ? '0' + time['Minutes']:time['Minutes'];
            this.sec = time['Seconds'] < 10 ? '0' + time['Seconds']:time['Seconds'];
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

    function showNotification(obj){
        if (obj) {
            let div = document.createElement('div');

            obj.top  = obj.top || 0;
            obj.right = obj.right || 0;
            obj.className = obj.className || '';

            div.classList.add('notification');
            div.classList.add(obj.className);
            div.style.top = obj.top + 'px';
            div.style.right = obj.right + 'px';
            div.textContent = obj.html || 'AoaiADsdasda';
            div.style.position = 'absolute';

            document.body.appendChild(div);
            return div;
        }
    }


        let div = showNotification({
            top: 10, // 10px от верхней границы окна (по умолчанию 0px)
            right: 10, // 10px от правого края окна (по умолчанию 0px)
            className: "welcome" // дополнительный класс для div (необязательно)
        });
    setTimeout(()=>{
        div.style.visibility = 'hidden';
        div.style.opacity = '0';
    }, 10000);

    /*
    let container = document.querySelector('.timmer');
    wimer.init(container);
    wimer.go();

    container.querySelector('.stop').addEventListener('click', ()=>{wimer.stop()});
    container.querySelector('.start').addEventListener('click',  ()=>{wimer.start()});


    document.getElementById('one').insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');*/

});


