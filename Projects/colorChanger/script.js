const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector("body");

button.forEach(function(btn){
    btn.addEventListener('click', function (e){
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }
    })
})
