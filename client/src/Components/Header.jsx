import { AppBar, Toolbar, styled} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SidebarList from "./SiderbarList";
import { InshortsDataContext } from "../Context/ContextProvider";

const StyledHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const Menu = styled(MenuIcon)`
  color: #000;
  cursor: pointer;
`;

const Image = styled("img")({
  height: 55,
  margin: "auto",
  paddingRight: 70,
});

const Sidebar = styled(Offcanvas)`
  position: fixed;
  width:250px !important;
  background: #303036;
  color:#fff;
`;

const Header = () => {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  const {Show,SetShow} = useContext(InshortsDataContext);  
  const handleClose = () => SetShow(false);
  const handleShow = () => SetShow(true);

  return (
    <>
      <StyledHeader position="fixed">
        <Toolbar>
          <Menu onClick={handleShow} />
          <Image src={url} alt="inshorts-img" />
        </Toolbar>
      </StyledHeader>
      <Sidebar
        show={Show}
        onHide={handleClose}
        name="Enable body scrolling"
        scroll={true}
        backdrop={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <hr style={{width:'100%'}} />
        <Offcanvas.Body>
          <SidebarList />      
        </Offcanvas.Body>
      </Sidebar>
    </>
  );
};

export default Header;
