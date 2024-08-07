import React, {useState} from 'react';
import {
    Box,
    Drawer,
    IconButton, Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
// import TelegramIcon from '../TelegramIcon/TelegramIcon';
import {cn} from '@bem-react/classname';
// import styled from '@mui/system';
import './BurgerMenu.scss';
import {styled} from "@mui/material/styles";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const burgerMenuCN = cn('BurgerMenu');

// Create a styled ListItemButton
const StyledListItemButton = styled(ListItemButton)(() => ({
    '&.Mui-selected': {

        '&:hover': {
            opacity: 0.5,
            backgroundColor: '#1C8394', // Remove hover effect for selected items
        },
    },
}));

const BurgerMenu = ({sections, open, onClose}) => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    // const handleListItemClick = (index) => {
    //     setSelectedIndex(index);
    // };

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 250,
                    height: '100vh',
                    backgroundColor: '#1C8394',
                    color: 'white',
                    '& .MuiListItemIcon-root': {
                        color: 'white',
                    },
                }}
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <IconButton onClick={onClose} sx={{mt: 1, ml: 1}}>
                    <CloseIcon sx={{color: '#fff'}}/>
                </IconButton>
                <List className={burgerMenuCN()}>
                    {sections.map((section, index) => (
                        <ListItem className={burgerMenuCN('Item')} key={section.label} disablePadding>
                            {/* Use the styled ListItemButton here */}
                            <StyledListItemButton
                                className={burgerMenuCN('Button')}
                                selected={selectedIndex === index}
                                onClick={() => {
                                    section.onClick();
                                }}
                            >
                                <ListItemIcon>{section.icon}</ListItemIcon>
                                <ListItemText primary={section.label}/>
                            </StyledListItemButton>
                        </ListItem>
                    ))}
                    <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                        <Link target={'_blank'} href="https://wa.me/79182921781" color="inherit">
                            <IconButton color="inherit">
                                <WhatsAppIcon height={'40px'} width={'40px'}/>
                            </IconButton>
                        </Link>
                        <Link target={'_blank'} href="https://t.me/UliEffect" color="inherit">
                            <IconButton color="inherit">
                                <TelegramIcon height={'40px'} width={'40px'}/>
                            </IconButton>
                        </Link>

                    </Stack>
                    <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={'20px'}>
                        <PhoneNumber/>
                    </Stack>
                    <Stack className={burgerMenuCN('FeedBackForm')} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={'20px'}>
                        <FeedbackForm/>
                    </Stack>
                </List>
            </Box>
        </Drawer>
    );
};

export default BurgerMenu;
