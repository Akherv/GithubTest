let button = document.querySelector('button');
let talk = document.querySelector('#talk');


button.addEventListener('click', function(e){
    talk.classList.toggle("scale")
})