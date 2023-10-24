import { Request, Response, NextFunction } from "express";



const objeto = {
    nombre: "Maxi",
    edad: 29,
    mascota: "No tengo.",
    id: 1234
}

const stock =[
    {   
        item: "",
        cantidad:1,

    },
    {   
        item: "",
        cantidad:2,

    }
]

export const Puerto = async (req: Request, res: Response) =>{
    res.status(200).send(`El puerto esta en el puerto 3000`)
}


export const Prueba =async (req: Request, res: Response, next:NextFunction) => {
    
    const {nombre}= req.query
    const {edad} = req.body


    try{

        if(objeto.nombre === nombre){
            res.status(200).send({message:"El usuario existe.", objeto})

        }else{
            res.status(400).send({message:"El usuario no tiene mascota."})
        }
    }catch(error){
        next(error)
    }
}


export const Stock = async (req: Request, res: Response) =>{
    const {cantidad} = req.query
    console.log(cantidad)
    const numero = Number(cantidad)
    

    try{
        const items = stock.filter((el) => el.cantidad === numero )
        if(items.length >= 0){
            res.send(items)
        }else{
            res.status(404).send('Item no tiene stock')
        }

    }catch(error){
        console.log(error)
    }

}