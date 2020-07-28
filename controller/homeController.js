const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')) //./ toma como referencia de una la carpeta raiz


const homeController={
    index:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
         ______________________________________________________________________________________________________________________________________
                                                                                                                                                                                                 
                                                        *******¡BIENVENIDO!********
                                                                                        
                            Para un mayor dinamismo por nuetra web te dejamos estos atajos que te seran de utilidad 

            /sucursales -> Para ver mas info sobre sucursales.                                                                                   
            /sucursales/ElNombreDeLaSucursal -> te mostramos una sucursal en particular. Con mayuscula, acordate!                              
                                                                                                                                                      
            /marcas -> Todas nuestras marcas.                                                                 
            /marcas/LaMarcaDeTuInteres => ¿Buscas un modelo en particular? te podemos ayudar.                                                
                                                                                                                                                      
            /autos -> Todos nuestros autos disponibles.                                                                  
            /autos/MarcaElegida -> Si te gusta una marca en especial podes filtrarla!                                                            
            /autos/MarcaElegida/color -> ¿Buscas un color en especial? (hay que ingresar los colores en inglés, acordate!)  
            /autos/MarcaElegida/año -> No solo podes buscar marca y color, tambien podes buscar por años.                                                                                  
        _______________________________________________________________________________________________________________________________________
            
            `)
        res.write(`

                                                     *******NUESTRAS SUCURSALES*******`)
        dbConce.forEach((sucu)=>{
            res.write(`\n\n`)
            res.write(`
                                                         Sucursal:  
                                                                  ${sucu.sucursal} \n\n`);
            
            })
        res.end() 
    }
}

module.exports = homeController