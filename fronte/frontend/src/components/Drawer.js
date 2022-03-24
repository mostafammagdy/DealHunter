import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ConstructionRounded } from '@mui/icons-material';

export default function DrawerComponent(props) {

    return(
  <Drawer onClose = {()=>props.setOpenDrawer(false)}open ={props.openDrawer} >
      <List>
        {['Sign In','Sign Up'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/ }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>



  </Drawer>
    )
}
