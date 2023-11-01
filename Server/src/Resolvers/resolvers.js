import axios from "axios";

export const resolvers = {
  Query: {
    convertCurrency: async (_, { from, to, amount }) => {
      try {
        const API_KEY = '9b95fe62ecbbb466dc1623994a74a55094394d4e'
        const response = await axios.get(`https://api.getgeoapi.com/v2/currency/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}&format=json`)
        const data = response.data
        
        if(!isNaN(data.amount)){
          data.amount = parseFloat(data.amount.replace(/,/g, ''));
          return {...data, rates: data.rates[to]} 
        }
        else{
          throw new Error ('400 - Error en la petición' + Error.name)
        }
      }
      catch (error) {
        console.log(error, 'soy el error y no pude hacer la petición')
        throw new Error ('500 -	Server error' + error)
      }
    }
  },
};
