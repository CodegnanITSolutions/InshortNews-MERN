
import { data } from "./constants/data.js";
import News from './models/new-schema.js';

const DefaultData = async () =>{
  
     try{
 
         await News.insertMany(data);
         console.log("Data Imported SuccessFully");
           
     }catch(error)
     {
        console.log('Error',error.message);
     }


}



export default DefaultData;