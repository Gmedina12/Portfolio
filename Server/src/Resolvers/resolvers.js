import axios from "axios";
import { convertUnits } from "../Mutation/convertUnits.js";
import {sendConfirmationEmail} from '../Mutation/sendConfirmationEmail.js'
import {recieveContactEmail} from '../Mutation/recieveContactEmail.js'

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
    getConfirmationMessage: () => confirmationMessage
  },
  Mutation: {
    measurementUnits: async (_, args) => {
        try{
          const result = convertUnits(args); 
          return result
        }
        catch(error){
            console.log("Error al realizar conversión de unidades", error);
            throw new Error ('500 - Internal server error: ' + error)
        }
      },
      sendConfirmationEmail: async ( sender, subject ) => {
        try{
          const sendMail = sendConfirmationEmail( sender, subject )
          return sendMail
        }
        catch(error){
          console.log("Error al enviar el  email", error);
          throw new Error ('500 - Internal server error: ' + error)
        }
        
      },
      recieveContactEmail: async ( _, {name, sender, subject, message}) => {
        try{
          const recieveEmail = recieveContactEmail(_, {name, sender, subject, message})
          return recieveEmail
        }
        catch(error){
          console.log("No se pudo recibir el email", error);
          throw new Error ('500 - Internal server error: ' + error)
        }
      },
  }
  }



