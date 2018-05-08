import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LocalShipping from '@material-ui/icons/LocalShipping';
import SendIcon from '@material-ui/icons/Send';

const AdminListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ShoppingBasket />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Envios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalShipping />
      </ListItemIcon>
      <ListItemText primary="Entregas" />
    </ListItem>
  </div>
);

export default AdminListItems;
