
const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))


const marcasController={  

    marcas:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(` 
         _______________________________________________________________
        |                                                               |                                                                                                             
        |                   Todas nuestras marcas                       |                                               
        |_______________________________________________________________|  
        
¡Atajo! */marcas/LaMarcaDeTuInteres -> ¿Buscas un modelo en particular? podemos ayudarte\n\n`)                                                    
                                                                                            
        let soloMarcas =[];
        dbConce.forEach((dato)=>{
            dato.autos.forEach((dato)=>{
                soloMarcas.push(dato.marca)
            })
        })
        let marca = soloMarcas.filter((dato, index) =>soloMarcas.indexOf(dato) === index)
        marca.forEach((dato)=>{
            res.write(`                 -${dato}\n`)

        })

       res.end()
    },  
    
    detalle:(req,res)=>{ 
        
        
        res.set({'content-type':'text/plain;charset=utf-8'})
        let parametroMarca = req.params.marcaAuto;
        let resultado = false;
        res.write(` 
         _____________________________________________________
        |                                                     |                                                                                                                             
        |        Los resultados para ${parametroMarca} son:                |                                      
        |_____________________________________________________|  \n\n`)
        res.write(`
                            \n\n`);
        dbConce.forEach((dato)=>{
        dato.autos.forEach((dato)=>{
        if(dato.marca == parametroMarca){
            res.write(`----------------------------------\n\n
            Marca: ${dato.marca} 
            Modelo: ${dato.modelo}  
            Año: ${dato.anio} \n\n `)
            
            resultado = true;
            }              
            })
            })
            if(resultado == false){
                res.write(` 
     ___________________________________________________________________________
    |                                                                           |                                                                                                             
    |           ****Lo sentimos, No tenemos esa marca disponible***            |                                               
    |___________________________________________________________________________|  \n\n`) 
                
            }
            res.end()
            }
      }


module.exports = marcasController