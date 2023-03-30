import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Navlist = () => {
    const navList = [
        { id: 1, name: 'Notes', icon: <LightbulbIcon />, route: '/' },
        { id: 2, name: 'Archives', icon: <ArchiveIcon />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <DeleteIcon />, route: '/delete' },
    ]
    return (
        <List style={{border: "none"}}>
            {navList.map(list=> (
                <ListItem key={list.id} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default Navlist;