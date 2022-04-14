import React from 'react'

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function Admin() {

    const [openItemsSold, setOpenItemsSold] = React.useState(true);
    const [openWebsiteUsage, setOpenWebsiteUsage] = React.useState(true);

    const handleClickItemsSold = () => {
      setOpenItemsSold(!openItemsSold);
    };

    const handleClickWebsiteUsage = () => {
        setOpenWebsiteUsage(!openWebsiteUsage);
      };
  

  return (

<div>

<h1>Administrator Control Panel</h1>

<List 
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
 
 <ListItemButton onClick={handleClickItemsSold}  
     style={{"width":"100%"}}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Items Sold Each month"  style={{'text-align':"center"}}/>
        {openItemsSold ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton >
      <Collapse in={openItemsSold} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} style={{"width":"100%"}}>
            <ListItemText primary="Items" style={{'text-align':"center"}} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickWebsiteUsage}>
        <ListItemIcon>
          <InboxIcon  />
        </ListItemIcon>
        <ListItemText primary="Website Usage" style={{'text-align':"center"}} />
        {openWebsiteUsage ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openWebsiteUsage} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          
            <ListItemText primary="Reports" style={{'text-align':"center"}} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>




</div>



  )
}
