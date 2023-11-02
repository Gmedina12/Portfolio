import axios from "axios";
import { readFile } from 'fs/promises'
import jsonImport from '../../measurementsApi.json' assert { type: 'json' }

// import { convertUnits } from "../Mutation/convertUnits.js";

export const resolvers = {
  Query: {
    convertCurrency: async (_, { from, to, amount }) => {
      try {
        const API_KEY = '9b95fe62ecbbb466dc1623994a74a55094394d4e'
        const response = await axios.get(`https://api.getgeoapi.com/v2/currency/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}&format=json`)
        const data = response.data

        if (!isNaN(data.amount)) {
          data.amount = parseFloat(data.amount.replace(/,/g, ''));
          return { ...data, rates: data.rates[to] }
        }
        else {
          throw new Error('400 - Error en la petición' + Error.name)
        }
      }
      catch (error) {
        console.log(error, 'soy el error y no pude hacer la petición')
        throw new Error('500 -	Server error' + error)
      }
    },
  },
  Mutation: {
    measurementUnits: async (_, args) => {
        try{
          const {group, convertFrom, convertTo, quantity} = args
          const jsonData = await readFile(jsonImport, 'utf-8');
          const measurementsList = JSON.parse(jsonData);
      

          const convertUnits = (measurementData, convertFrom, convertTo, quantity) => {
            if (!measurementData) {
              throw new Error(`Grupo de medida '${group}' no encontrado.`);
            }
          
            const equivalencias = measurementData.equivalencias;
            if (!equivalencias) {
              throw new Error(`No se encontraron equivalencias para el grupo de medida '${group}'.`);
            }
          
            const factorConversion = equivalencias[parseFloat(convertFrom)] && equivalencias[parseFloat(convertFrom)][parseFloat(convertTo)];
          
            if (factorConversion === undefined) {
              throw new Error(`No se encontró una conversión válida de '${convertFrom}' a '${convertTo}'.`);
            }
          
            const convertedQuantity = parseFloat(quantity) * factorConversion;
          
            return {
              group,
              convertFrom,
              convertTo,
              originalQuantity: quantity,
              convertedQuantity,
            }
        }
          const result = convertUnits(measurementsList[group], convertFrom, convertTo, quantity); 
          return result;

        }
        catch(error){
          console.log("Error al realizar conversión de unidades", error);
            throw new Error ('500 - Internal server error: ' + error)
        }
    },
  }
};


