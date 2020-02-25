
document.addEventListener('DOMContentLoaded',function () {
    document.querySelector('#go_b').onclick =  go;

})



function go() {
    showCircle(150, 150, 100).then( div => {
        div.classList.add('message-ball');
        div.append('helloworld');
    })
}

function showCircle (top, left, radius){
    let div = document.createElement('div');
    div.style.width = '0px';
    div.style.height = '0px';
    div.style.top = top;
    div.style.left = left;
    div.classList.add('circle');
    document.body.append(div);

    return new Promise(resolve => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend',handler);
                resolve(div);
            })
        }, 0)
    })
}