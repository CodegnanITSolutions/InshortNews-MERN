// import inshorts from 'inshorts-news-api';

const inshorts = require('inshorts-news-api');


const getNews = (req,res) =>{
  
    const category = req.query.category;
    let temp = category.toLowerCase();
    if(temp === 'all news')
    {
        temp = '';
    }

    try{
        var options = {
            lang: 'en',
            category:temp
        }
    
        inshorts.getNews(options, function(result, news_offset){
            // console.log(temp);
            // console.log(result);
            res.status(200).json(result);
            console.log(news_offset); //it will be used in getMorePosts
        });
          
      
       

    }catch(error)
    {
        res.status(500).json({message:error.message});
    }
}


// export default getNews;
module.exports = getNews;


