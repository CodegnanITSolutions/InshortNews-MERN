import { Box, Typography,styled} from "@mui/material";
import { ExternalLink } from 'react-external-link'


const Container = styled(Box)(({ theme }) => ({
  background: '#f44336',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  height: 48,
  marginBottom: 30,
  [theme.breakpoints.down('md')]: {
      display: 'none'
  }
}));

const Image = styled('img')({

    height:34,
    '&:last-child':{
        margin:'0px 30px 0px 20px',
    }

});

const Text = styled(Typography)`
 
    font-size:14px;
    font-weight:300;
    margin-left:50px;
    
`;

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Container >
      <Text>
        For the best experience use <span style={{fontWeight:'600'}}> <ExternalLink href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3Dinshorts_mobile" style={{textDecoration:'none',color:'#fff'}}>inshorts</ExternalLink></span> app on your smartphone
      </Text>
      <Box style={{display:'flex', marginLeft:'auto'}}>

        <ExternalLink href="https://apps.apple.com/us/app/news-in-shorts/id892146527"> <Image src={appleStore} alt="appleStore" /> </ExternalLink> 
        <ExternalLink href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website">  <Image src={googleStore} alt="googleStore" /> </ExternalLink>
      
      </Box>
    </Container>
  );
};

export default InfoHeader;
