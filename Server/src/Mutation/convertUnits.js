
// import { readFile } from 'fs/promises'
import jsonImport from '../../measurementsApi.json' assert { type: 'json' }
// const measurements = JSON.parse(JSON.stringify(jsonImport)) as Measurement[]


export const convertUnits = async (args) => {
    try {
        // console.log(jsonImport)
        const { group, convertFrom, convertTo, quantity } = args
        if (!group || !convertFrom || !convertTo || !quantity){
            throw new Error('Missing parameters')
        }
        const toConvert = jsonImport[group].equivalencias[convertFrom][convertTo]
        
        const unitConverted = toConvert*quantity
    
        return unitConverted

    }
    catch (error) {
        console.log('Error in conversion', error)
        throw new Error('500 - Internal Error: No se pudo realizar la conversión' + error)
    }


}