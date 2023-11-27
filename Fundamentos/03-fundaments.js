// 3 formas de ejecutar cpdigo asincrono

// callbacks hell
// promesas
// asyn - await

// const conexionBDD = (datosConexion) => { 

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             datosConexion ? resolve("Conexion OK") : reject("Conexion Error")
//         })

//     })

// }

// conexionBDD(false)
//     .then((r)=>{console.log(r);})

//     .catch((r)=>console.log(r))

// opcion para almacenar la informacion en una variable

// const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users")

// obtenerDatos
//     .then(peticion => peticion.json())
//     .then(respuesta=>console.log(respuesta))
//     .catch(error => console.log(error))

// opcion para solo ver la informacion
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(peticion => peticion.json())
//     .then(respuesta=>console.log(respuesta))
//     .catch(error => console.log(error))

// fetch("https://jsonplaceholder.typicode.com/users")

// const conectarAPI = async() => { 
//     try{
//         const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await respuesta.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// conectarAPI()
