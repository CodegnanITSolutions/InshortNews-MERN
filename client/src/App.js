import {Box,styled} from '@mui/material'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from './Components/Header';
import InfoHeader from './Components/InfoHeader';
import Articles from './Components/Articles';
import Footer from './Components/Footer/Footer';

//Context Provider
import ContextProvider from './Context/ContextProvider';

const Container = styled(Box)(({ theme }) => ({

     width:'60%',
     margin:'110px auto 0 auto',
     [theme.breakpoints.down('sm','md')]: {
      margin: '110px 0 0 0',
      width:'100%'
   }

}));


function App() {
  return (
    <ContextProvider>
    <Box>    
     <Header />

     <Container className='main'>
         <InfoHeader/>
         <Articles />                         
     </Container>
     <Footer />                            
    </Box>
    </ContextProvider>
  );
}

export default App;
