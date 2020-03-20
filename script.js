let button = document.querySelector('button');
let talk = document.querySelector('#talk');


button.addEventListener('click', function(e){
(talk.classList!=="scale")?
    talk.classList.add("scale")
    :
    talk.classList.remove("scale")
})