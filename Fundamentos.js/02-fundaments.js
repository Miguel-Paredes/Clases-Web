// const user = {
//     name : "Miguel",
//     ciudad: "Quito",
//     activo: true,
//     address:{
//         calle: "Calle abc",
//         secundaria: "Calle 123"
//     },
//     edad: 20,
//     friends: ["Jose","Albert","Juanita"],
//     sendMail(){
//         return `Send mail ${this.friends[0]}`
//     },
//     sendNotification:function(){
//         return `Send notification ${this.friends[1]}`
//     }
// }
// //console.log(user)
// console.log(user.ciudad)
// console.log(user.edad)
// console.log(user.sendMail())
// console.log(user.address)

// //agregar valores
// user.image="http"
// //eliminar valores
// delete user.friends

// //desestructuracion de objetos

// //parte larga
// user.name
// user.edad
// user.friends
// user.activo
// console.log(user.name)
// console.log(user.edad)
// console.log(user.friends)
// console.log(user.activo)


// //parte corta
// const{name,edad,friends,activo}=user
// console.log(name,edad,friends,activo)

// const address = {
//     calle: "Principal 123",
//     secundaria: "abc-789"
// }

// const allInformation={...user,...address}

// console.log(allInformation)

// const nombre = "laptop"
// const precio = 1000
// const newProduct = {
//     name: nombre,
//     price: precio
// }

// console.log(newProduct)

const profiledUser=["Miguel","Paredes",20,true,{ciudad:"quito"}]

//agregar al final
const skills = ["front","backt"]
profiledUser.push(skills)

//agregar al inicio
const skills1="💖💖"
profiledUser.unshift(skills1)

// Para sacar <- pop shift
// Para meter -> push unshift

console.log(profiledUser)

const findOne = profiledUser.find((e)=>e==="Juan")

const findTwo = profiledUser.find((e)=>e==="Miguel")

console.log(findOne)
console.log(findTwo)