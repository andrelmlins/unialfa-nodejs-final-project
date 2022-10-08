import axios from 'axios';

const requestHttp = async (url: string, method: string, data?: any) => {

    const response = await axios.post(
      url, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  }

  export default requestHttp;
