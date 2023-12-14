import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import "./sidebar.css"
import { Button } from 'react-bootstrap';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const CustomBurgerIcon = () => <Button className="buttonMenu"><MenuIcon sx={{fontSize:"45px"}}/></Button>;
const CustomCrossIcon = () => <CloseIcon className="cross"/>;

function Sidebar () {
  return (
    <Menu right  customBurgerIcon={ <CustomBurgerIcon /> } customCrossIcon={ <CustomCrossIcon /> }>
      <div className='menuLinks'>
      <Button className='itemMenuLink' href="/">Home</Button>
      <Button className='itemMenuLink' href="/about">About</Button>
      <Button className='itemMenuLink' href="/contact">Contact</Button>
      </div>
    </Menu>
  );
};

export default Sidebar;