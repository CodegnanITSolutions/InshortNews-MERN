import mongoose from "mongoose";

const Connection = async (username,password) =>{
  
   const URL = `mongodb+srv://${username}:${password}@inshorts-clone.tvsszzv.mongodb.net/?retryWrites=true&w=majority`;
      
   try{
 
     await mongoose.connect(URL,{useNewUrlParser:true});
     console.log("Database Connected SuccessFully");

   }catch(error){

        console.log('Error While Connecting With the Database',error);
   }

}


export default Connection;