//for
/* Estructura 
for(inicializacion; condicion; actualizacion){
bucle

}

let i = 0;
i= i+1;
i+=1

i++
*/

//Tipos de For

//for

for( let i=0; i < 10; i++){
    console.log(i)

}

let lista = [1,4,6,8,10,15,18]
for(let i=0; i< lista.length /*longitud de la cadena que se esta agregando */ ; i++){
console.log(lista[i])

} 
//for...of
for(let valor of lista){
    console.log(valor)


}



//for...im
let persona ={
nombre= "fran",
apellido= "garcia",
edad= 22,
isDeveloper= true

}

console.log(persona.nombre)
let prop = "edad";
console.log(persona[prop])

for 



//forEach
lista.forEach(valor => /*esta es un arrow funtion */{
    console.log(valor);



}