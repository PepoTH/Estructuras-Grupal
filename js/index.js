nav_before = document.getElementsByClassName('nav-before')[0]
nav = document.getElementsByClassName('navbar')[0]
box = document.getElementsByClassName('main-index')[0]
close = document.getElementById('close')
ejtitle = document.getElementById('ejercicios-titlenav')
listaejercicios = document.getElementById('list-nav')
listaejercicios.style.display = 'none'
inicio = document.getElementById('init')
github = document.getElementById('git')

//Apertura de Menu
nav_before.addEventListener('click',()=>{
    nav.style.display = 'flex'
    nav_before.style.display = 'none'
    box.style.filter = 'blur(5px)';
})

//Cierre de Menu
close.addEventListener('click',()=>{
    nav.style.display = 'none'
    nav_before.style.display = 'flex'
})

//Redireccion a la portada
inicio.addEventListener('click',()=>{
    location.href = '#mainer'
})

//Redireccion de Github
github.addEventListener('click',()=>{
    location.href = 'https://github.com/PepoTH/Estructuras-Grupal'
})

//Verificar para abrir y cerrar ejercicios
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

//Validacion de Numeros
function validNumber(e){
    if (isNaN(e.key)){
        e.preventDefault()
    }
}

//Factorial
function factorial (n) {
	let total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;
}

//Combinacion
function combinacion(n,k){
    let c = (factorial(n))/((factorial(n-k)*factorial(k)))
    return c
}

//Permutacion
function permutacion(n,k){
    let p = (factorial(n))/(factorial(n-k))
    return p
}