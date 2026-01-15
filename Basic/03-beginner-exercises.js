/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//Hola mundo      
// 2. Escribe un comentario en varias líneas
/*
Esto es
un comentario
en varias lineas
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let name = "Ana"
let edad = 20
let deciaml = 1.30
let isStudent = true
let isTeacher = false
let undefinedValue
let nullValue = null
let mySymbol = Symbol("miSimbolo")
let bigIntNumber = BigInt(123456789012345678901234567890n)
// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(edad)
console.log(deciaml)
console.log(isStudent)
console.log(isTeacher)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(bigIntNumber)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)
console.log(typeof edad)
console.log(typeof deciaml)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof bigIntNumber)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = "Maria"
edad = 30
deciaml = 3.60
isStudent = false
isTeacher = true
undefinedValue = "Ahora tiene un valor"
nullValue = "Ahora no es null"
mySymbol = Symbol("otroSimbolo")
bigIntNumber = BigInt(987654321098765432109876543210n)
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name = 25
edad = "Veinticinco"
deciaml = true
isStudent = 1.5
isTeacher = "false"
undefinedValue = null
nullValue = undefined
mySymbol = "No es un simbolo"
bigIntNumber = 123456789012345678901234567890
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constName = 'Juan'
const constEdad = 30
const constDecimal = 2.50
const constIsStudent = false
const constIsTeacher = true
const constUndefinedValue = undefined
const constNullValue = null
const constMySymbol = Symbol("constSimbolo")
const constBigIntNumber = BigInt(112233445566778899001122334455n)
// 9. A continuación, modifica los valores de las constantes
const constName2 = "carlos"
const constEdad2 = 10
const constDeciaml2 = 5.60
const constIsStudent2 = true
const constIsTeacher2 = false
const constUndefinedValue2 = "Ahora tiene un valor"
const constNullValue2 = "Ahora no es null"
const constMySymbol2 = Symbol("otroConstSimbolo")
const constBigIntNumber2 = BigInt(998877665544332211009988776655n)
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//constName = "Pedro" //Error: Assignment to constant variable.
//constEdad = 40 //Error: Assignment to constant variable.
//constDecimal = 7.80 //Error: Assignment to constant variable.
//constIsStudent = false //Error: Assignment to constant variable.
//constIsTeacher = true //Error: Assignment to constant variable.
//constUndefinedValue = "Valor" //Error: Assignment to constant variable.
//constNullValue = null //Error: Assignment to constant variable.
//constMySymbol = Symbol("nuevoSimbolo") //Error: Assignment to constant variable.
//constBigIntNumber = BigInt(1234567890n) //Error: Assignment to constant variable.
