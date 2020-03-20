let button = document.querySelector('button');
let talk = document.querySelector('#talk');
let water = document.querySelectorAll('.water');

button.addEventListener('click', function(e){
    button.classList.toggle("scale");
})

water.forEach(el => el.addEventListener('click', event => {
  console.log(event.target.classList[0]);
  event.target.classList.toggle("scale");
}));

