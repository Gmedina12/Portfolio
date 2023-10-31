import axios from "axios";

export const resolvers = {
  Query: {
    convertCurrency: async (_, { from, to, amount }) => {
      try {
        const API_KEY = '9b95fe62ecbbb466dc1623994a74a55094394d4e'
        const response = await axios.get(`https://api.getgeoapi.com/v2/currency/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}&format=json`)
      
        return response.data
      }
      catch (error) {
        console.log(error, 'soy el error y no pude hacer la petición')
        throw new Error ('500 -	Server error' + error)
      }
    }
  },
};
