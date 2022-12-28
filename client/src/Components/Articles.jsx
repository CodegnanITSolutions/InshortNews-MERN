import { useEffect,useContext } from "react";
import { InshortsDataContext } from "../Context/ContextProvider";
import InshortsArticle from "./InshortsArticle";
import {InshortsNewsFetch} from '../Service/api';
import {NotepadLoader} from 'react-loaders-kit'
import {Box,styled} from '@mui/material';


const Component = styled(Box)`
 
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`;

const Container = styled(Box)(({theme})=> ({

  textAlign:'center',
  fontSize:'20px',
  position: 'absolute',
  top: '170px',
  bottom: '20px',
  fontWeight:600,
  [theme.breakpoints.down('md')]: {
     top:'80px'
  },
  [theme.breakpoints.down('sm')]: {
    top:'80px'
  },


}));
  
 




const Loader = styled(Box)`
 
  margin-top:40px;


`;

const Articles = () => {
  
 
  const {Data,SetData,Element,loading,setLoading} = useContext(InshortsDataContext);
 
    const loaderProps = {
        loading,
        size: 125,
        text:'Loading',
        duration: 1,
        colors: ['#5e22f0', '#f6b93b']
    }

  

  useEffect(()=>{
  
    const fetchData = async () =>{
      // console.log('Inside Articles');
      const response = await InshortsNewsFetch('All News');
      // console.log(response.data);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
  
      });
      SetData(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();

  },[setLoading,SetData]);

  return (
    <Component>
    {
      loading ? <><Container> {Element} Loading... </Container> <Loader><NotepadLoader {...loaderProps} /></Loader> </>:<Box>      
      {Data.map((article,index) => (
        <InshortsArticle article={article} key={index} />
        
      ))}
    </Box>
 

    } 
    </Component>
  );
};

export default Articles;
