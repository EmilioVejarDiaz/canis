//let 
//var genera una variable que no es de tipo scope solo se puede declarar en un scope (ya no deberia de ocuparse xd)
//const: genera un objeto/constante (declarar primero fuera de un scope)
//$scope = fragmento de codigo {}
//ejemplo:
/*function suma(){
    const numero=3;
    let numero2=4;
function sumaSegunda (){
const numero=3;
const numero2=4;
let numero3=4;
}// otro $scope
} //$scope

// arrow function:
function suma2(num, num2){
return num+num2;
}
const suma=function(num, numn2){
return num+numn2;
}
const suma =(num,num2) => num+num2
////
//template string
const name ="Emile"
const surname ="Pedro"
const lastname ="Vejar"
const fullname =name+''+surname+''+lastname
const fullname2 = `${name} ${surname} ${lastname}`
////
//to string

const person={
    name:'',
    surname:'',
    lastname:null
}

(()=>{
    const name=person.name.toString();
    const name2=`${person.name} ${person.lastname ? person.lastname:''}`
})()
/////
//arreglo
const roles =[1,2,3]
//arrayList
const roles2=[
    {
        key: 'ADMIN',
        name:'SUPER ADMINISTRADOR'
    },
    {    key: 'USER',
        name: 'usuario'
    }
]
//Lista
const roles3={}
//push, splice, indexOf, find, map, foreach, lenght

roles.forEach((element, index) =>{
console.log(element.name);
})

for (let i=0; i<= roles.length; i++){
    console.log(roles[i].name)
}

/////
//desestructuracion de datos
const person2={
    name: 'Emile',
    age: 20,
    address: {
        street: 'Chipitlan',
        number:34
    }
}

console.log(person2.name);
console.log(person2.address.street)

(()=>{
    const {name, address:{street}}=person2
})()
*/



