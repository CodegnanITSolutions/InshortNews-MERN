import { useContext} from "react";
import { List,ListItem,styled} from "@mui/material";
import {InshortsNewsFetch} from '../Service/api';
import { InshortsDataContext } from "../Context/ContextProvider";

const ListItemComponent = styled(ListItem)`

  
   :hover{
      background:#808290;
      cursor:pointer;
   }

`;


const DataList = [
  "All News",
  "India",
  "Business",
  "Sports",
  "World",
  "Politics",
  "Technology",
  "Startup",
  "Entertainment",
  "Automobile",
  "Science",
  "Hatke",
  "Miscellaneous",
];



const SidebarList = () => {
   
   const {SetData,SetElement,setLoading,SetShow}  = useContext(InshortsDataContext);

  const getName = async (e) =>{

    // console.log(e.target.innerText);
    SetShow(false);
    SetElement(e.target.innerText);
    setLoading(true);
    const response = await InshortsNewsFetch(e.target.innerText);
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

  return (
    <List>
      {DataList.map((data, index) => {
        return( 
          <ListItemComponent onClick={(e)=>getName(e)} key={index}>
           {data}
          </ListItemComponent>
        );
      })}
    </List>
  );
};

export default SidebarList;
