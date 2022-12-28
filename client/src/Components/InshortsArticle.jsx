
import { Card, CardContent, Typography,styled, Grid } from "@mui/material";

const Component = styled(Card)`
    border:1px solid rgba(0,0,0,0.1);
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    margin-bottom: 20px;
    z-index:1;
    border-radius:5px;   

`;

const Container = styled(CardContent) `
    display: flex;
    padding: 8px;
    padding-bottom: 4px !important;
`;

const Image = styled('img')(({theme})=>({
    height: 268,
    width: '88%',
    borderRadius: 5,
    objectFit: 'cover',
    [theme.breakpoints.down('sm','md')]:{
        width:'100%'
    }

}));

const RightContainer = styled(Grid)(({ theme }) => ({
    margin: '5px 0px 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: '0 5px'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '5px 0'
    }
}));

const Title = styled(Typography)`
    font-weight: 300;
    color: #44444d;
    font-size: 22px;
    line-height: 27px;
   
`;

const Author = styled(Typography)`
    color: #808290;
    font-size: 12px;
    line-height: 22px;
`;

const Description = styled(Typography)`
    line-height: 22px;
    color: #44444d;
    margin-top: 5px;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    
`;

const Short = styled('b')({
    color: '#44444d',
    fontFamily: "'Convergence', sans-serif"
})

const Publisher = styled(Typography)`
    font-size: 14px;
    margin-top: auto;
    margin-bottom: 10px;
    text-decoration: none !important;
    & > a: {
        text-decoration: none,
        color: '#000',
        fontWeight: 900
    }
`;

const InshortsArticle = ({ article }) => {
    
    return (
        <Component>
            <Container>
                <Grid container>
                    <Grid lg={5} md={5} sm={5} xs={12} item>
                        <Image src={article.image} />
                    </Grid>
                    <RightContainer lg={7} md={7} sm={7} xs={12} item>
                        <Title>{article.title}</Title>
                        <Author>
                            <Short>short</Short> by {article.author} / {article.postedAt}
                        </Author>
                        <Description>{article.content}</Description>
                        <Publisher>
                             <a href={article.readMore} target='_blank' rel="noreferrer" style={{textDecoration:'none',color:'#000',fontWeight:'600'}}>Click Here To Read More</a>
                        </Publisher>
                    </RightContainer>
                </Grid>
            </Container>
        </Component>
    )
}

export default InshortsArticle;