import axios from 'axios';

export class RequestHttp {
  
  url: string

  constructor(url: string) {
    this.url = url;
  }

  async get(path: string, params: any) {
    try { 
      const response = await axios.get(
      `${this.url}${path}`, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
   } catch (error) {
     return { message: error.message }
   }
  }

}
