
// import News from '../models/new-schema.js';

const News = require('../models/new-schema.js');

const NewsFetchControllers = async (req,res) =>{
  
   try{
    const size = Number(req.query.size);
    const skip = Number(req.query.page);
    console.log(size, skip)
    const data = await News.find({}).limit(size).skip(size * skip);
    // console.log(data);
    res.status(200).json(data);
       
   }catch(error)
   {
       res.status(500).json({message:error.message});
   } 
}


// export default NewsFetchControllers;
module.exports = {NewsFetchControllers};