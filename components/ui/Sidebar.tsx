import { useContext } from "react";

import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from "../../context/ui";

const menuItems :string[] = ["Inbox","Starred","Drafts","Sent"]
export const Sidebar = () => {
    const  { sideMenuOpen,closeSideMenu  } = useContext(UIContext);
    return (
        <Drawer
            anchor="left"
            open={sideMenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{width:"250px"}}></Box>
            <Box sx={{padding:'5px 10px'}}>
                <Typography variant="h4">Menu </Typography>
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {index % 2 === 0? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>
                <Divider/>
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {index % 2 === 0? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
