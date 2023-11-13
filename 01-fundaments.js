console.log("Hello JS")

let dato = 1

dato = [12,true,89]
dato = {
    nombre:"Miguel",
    edad:20
}

let nombreJuego = " Mario Kart "

console.log("Número de letras:",nombreJuego.length);
console.log("Encotrar alguna palabra:",nombreJuego.includes("Kart"));
console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",nombreJuego.slice(1,6));
console.log("Cortar un texto:",nombreJuego.substring(1,6));
console.log("Cortar un texto:",nombreJuego.charAt(1));
console.log("Repetir un texto:",nombreJuego.repeat(2));
console.log("Dividir un texto:",nombreJuego.split(" "));


let puntosVida = "45 p"
console.log(`${nombreJuego} ${puntosVida}`)

const num1 = 20
const num2 = "20"
console.log(`${+num2 + num1}`)
const num3 = "20"
const num4 = "20"
console.log(`${+num3+ +num4}`)


let saldo1 = 1500
let saldo2 = 1000

if(saldo1>saldo2){
    console.log("Pagar");
}

else{
    console.log("Seguir consumiendo")
}

const respuesta = saldo1 > saldo2? "Pagar" : "Seguir consumiendo" 
console.log(respuesta)


const tareas = ["trabajar","comer","dormir"]
const usuario = {
    nombre:"Cristian",
    skills:true
}
tareas.forEach(t=>console.log(t))
tareas.forEach((t,i)=>console.log(t,i))

for(const clave in usuario){
    console.log(`${usuario[clave]}`)
}

const nuevastareas = tareas.map(t=>t)
console.log(nuevastareas)

function declarada(){
    console.log("Funcion declarada")
}
declarada()
const expresada = function(){
    console.log("Funcion expresada")
}
expresada()

console.log(
    function(){
        // console.log("hola");
        return "hola"
    }()
)

function hello(dato1,dato2){
    console.log(dato1+dato2);
}
hello('JS','RS')
function hello1(dato1,dato2="Angular"){
    console.log(dato1+dato2);
}
hello1('JS')


const precioFinal = function(a,b,...args){
    console.log(args)
}
precioFinal(10,20,40,67,89,44)
precioFinal(10,20,40)
const precioFinal1 = function(a,b,...cualquiera){
    console.log(a,b,cualquiera)
}
precioFinal1(10,20,40,67,89,44)


function hello2(){
    return "Hola JS"
}
console.log(hello2())


function hello3(){
    return function(){
        return "Hello Nextjs"
    }
    ()
}

console.log(hello3())


function login(user,password){
    console.log("Usuario y password");
}
//Funcion flecha
const validar=(user,password)=>{
    console.log("Usuario y password")
}
//Funcion expresada
const validar1=function(user,password){
    console.log("Usuario y password")
}

// con nfn creamos la siguiente funcion
const first = (second) => { third }
