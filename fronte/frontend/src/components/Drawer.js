import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AbcIcon from '@mui/icons-material/Abc';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';


export default function DrawerComponent(props) {
  const [openBox, setOpenBox] = React.useState(false);
  const [openSignInBox,setSigninBox] = React.useState(false);


const loginList = [
{
  text: "Sign Up",
  icon :<HowToRegOutlinedIcon/>,
  onClick: () => {setOpenBox(true)}
},
{
text: "Sign In",
icon: <HowToRegIcon />,
onClick: () => {setSigninBox(true)}

}

]

const itemsList = [
  {
    text: <Link style ={{textDecoration:"none",color:"black"}} to="/items/brands">Brands</Link>,
    icon :<AbcIcon/>,
  },
  {
  text:  <Link style ={{textDecoration:"none",color:"black"}} to="/items/types">Types</Link>,
  icon: <LibraryBooksIcon />,
  
  }
  
  ]




    return(
    
  <Drawer onClose = {()=>props.setOpenDrawer(false)}open ={props.openDrawer} >
    <SignUp openBox = {openBox} setOpenBox = {setOpenBox}/>
    <SignIn openBox = {openSignInBox} setOpenBox = {setSigninBox}/>
      <List>
        
        {loginList.map((item, index) => {
          const {text, icon,onClick} = item;
          return(
          <ListItem button key={text} onClick = {onClick}>
         {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
          );
     })}
      </List>
      <Divider/>
      <List>
        
        {itemsList.map((item, index) => {
          const {text, icon} = item;
          return(
          <ListItem button key={text}>
         {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
          );
     })}
      </List>



  </Drawer>
    )
}
