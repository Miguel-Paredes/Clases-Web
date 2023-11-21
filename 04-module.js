const login=(user,pass)=>{
    if(!user && pass) return console.log("No autorizado")
    console.log(`Welcome ${user}`)
}

const LIKES = 500
//otra forma de exportar con COMMONJS

// asi se exporta una funcion 
// tambien permite exportar variables
// module.exports = login


// asi se exportan muchas cosas
// module.exports={
//     login,
//     LIKES
// }

//ES MODULES
export default login //(1 solo dato)  

export{ //mas cosas
    login,
    LIKES
}