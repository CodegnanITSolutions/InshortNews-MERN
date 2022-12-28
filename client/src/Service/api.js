import axios from 'axios';

// const URL = 'http://localhost:8000';
const URL = '';

export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}


export const InshortsNewsFetch = async (category)=>{
 
     try{
           return await axios.get(`${URL}/inshortsNews?category=${category}`);
     }catch(error)
     {
        console.log('error while calling Inshorts API');
     }

}


