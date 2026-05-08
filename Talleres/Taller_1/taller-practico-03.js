// // let colores = prompt ('Ingresa 3 colores')
// colores.push

// // console.log(colores)

// const number1 = [1, 2, 3 ]
// const number2 = [4, 5, 6]

// numbers = number1.concat(number2)

// console.log(numbers)

// persona = { 
//     nombre: ['Juan'], 
//     edad: [30], 
//     ciudad: ['Madrid'] 
// }
// persona.nombre = ['Pedro']
// persona.edad = [25]
// persona.ciudad = ['Barcelona']

// console.log(persona)

// let usuario = prompt('ingresa tu nombre y profesion')

// usuario.push 
// console.log(usuario)

// let numero = 15
// let numero2 = 4

// let resultado = numero % numero2
// console.log(resultado)

// let numero = prompt('ingresa un numero')

// if (numero <0) {
//     console.log('Negativo')
// }else {
//     console.log('positivo')
// }

// let edad = prompt('ingresa tu edad')

// if (edad >= 18 && edad <= 65){
//     console.log('Eres apto para trabajar')
// }else {
//     console.log('No eres apto para trabajar')
// }

// const aleatorio = Math.floor(Math.random() * 10) + 1 ;

// let adivina = Number(prompt('adivina el numero'))

// if (adivina == 7){
//     console.log('Acertaste')
// }else{
//     console.log('No acertaste')
// }

// const numero =Number(prompt('Dime un numero'))
// if (numero % 2 === 0){
//     console.log('El numero es par')
// }else {
//     console.log('El numero es impar')
// }

// let dia = Number(prompt('ingresa un numero'))

// switch (dia) {
//     case 1:
//         console.log('lunes')
//         break
//     case 2:
//         console.log('martes')
//         break
//     case 3:
//         console.log('miercoles')
//         break
//     case 4:
//         console.log('jueves')
//         break
//     case 5:
//         console.log('viernes')
//         break
//     case 6:
//         console.log('sabado')
//         break
//     case 7:
//         console.log('domingo')
//         break
//     default:
//         console.log('Dia no valido')
// }

let numero1 = Number(prompt('Ingresa un numero'))
let numero2 = Number(prompt('Ingresa otro numero'))
let operación = prompt('ingresa una operación(+, -, /, *)')

switch (operación) {
    case '+':
        console.log(numero1 + numero2)
        break
    case '-':
        console.log(numero1 - numero2)
        break
    case '/':
        console.log(numero1 / numero2)
        break
    case '*':
        console.log(numero1 * numero2)
        break
    default:
        console.log('Operación no valida')
}