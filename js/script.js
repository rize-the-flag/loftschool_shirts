
document.addEventListener('DOMContentLoaded', function () {

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
        className: "welcome", // дополнительный класс для div (необязательно)
        html: "Pishov nahiu"
    });
    setTimeout(() => {
        div.style.visibility = 'hidden';
        div.style.opacity = '0';
    }, 10000);

});


