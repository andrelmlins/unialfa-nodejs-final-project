import axios from 'axios';

const requestHttp = async (url: string, method: string, data?: any) => {

   try { const response = await axios.post(
      url, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    // const json = await response.json();
    //  return json;
   } catch (error) {
     console.error(error.message)
   }
  }

  export default requestHttp;
