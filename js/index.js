nav_before = document.getElementsByClassName('nav-before')[0]
nav = document.getElementsByClassName('navbar')[0]
box = document.getElementsByClassName('main-index')[0]
close = document.getElementById('close')
ejtitle = document.getElementById('ejercicios-titlenav')
listaejercicios = document.getElementById('list-nav')
listaejercicios.style.display = 'none'
inicio = document.getElementById('init')
github = document.getElementById('git')

nav_before.addEventListener('click',()=>{
    nav.style.display = 'flex'
    nav_before.style.display = 'none'
    box.style.filter = 'blur(5px)';
})

close.addEventListener('click',()=>{
    nav.style.display = 'none'
    nav_before.style.display = 'flex'
})


inicio.addEventListener('click',()=>{
    location.href = '#mainer'
})

github.addEventListener('click',()=>{
    location.href = 'https://github.com/PepoTH/Estructuras-Grupal'
})

var openit = true
ejtitle.addEventListener('click',()=>{
    if(openit === true){
        listaejercicios.style.display = 'flex'
        openit = false
    }
    else{
        listaejercicios.style.display = 'none'
        openit = true
    }
    
})