import React, {useState} from 'react';
import {
    AppBar, Button,
    IconButton,
    Link,
    Stack,
    Toolbar,
    Typography,
    useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import KingBedIcon from '@mui/icons-material/KingBed';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {cn} from "@bem-react/classname";
import './Header.scss';
import Logo from '../Logo/Logo';
import CollectionsIcon from '@mui/icons-material/Collections';
// import {
// 	CONTACTS_ROUTE,
// 	GALLERY_ROUTE,
// 	MAIN_ROUTE,
// 	PRICE_ROUTE
// } from "../../utils/constants";
// import {useNavigate} from "react-router-dom";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";

const Header = () => {
    // const navigate = useNavigate();
    const [burgerOpen, setBurgerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)');


    const handleBurgerClick = () => {
        setBurgerOpen(!burgerOpen);
    };

    const handleClickScrollToPrivilege = () => {
        const element = document.getElementById('privilege');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    const handleClickScrollToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    const handleClickScrollToTransformResults = () => {
        const element = document.getElementById('transform-results');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    const handleClickScrollToUsefulFact = () => {
        const element = document.getElementById('useful-fact');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };


    const sections = [
        {
            label: 'Преимущества',
            // icon: <HomeIcon/>,
            onClick: handleClickScrollToPrivilege,
        },
        {
            label: 'Продукты',
            // icon: <KingBedIcon/>,
            onClick: handleClickScrollToProducts,
        },
        {
            label: 'Результаты трансформации',
            // icon: <CollectionsIcon/>,
            onClick: handleClickScrollToTransformResults,
        },
        {
            label: 'Полезный факт',
            // icon: <ContactPageIcon/>,
            onClick: handleClickScrollToUsefulFact,
        },
    ];

    const toolbar = cn('Toolbar');


    return (
        <AppBar className={toolbar('Wrapper')}>
            {!isMobile &&
                <Stack className={toolbar('Info')}>
                    <Stack sx={{
                        justifyContent: 'center',
                        flexDirection: 'row',

                    }}>
                        <Logo className={toolbar('Logo')} width={'7vw'} height={'100%'}/>
                        <Typography className={toolbar('Title')}
                                    component="h1"
                        >
                            UliEffectPlus
                        </Typography>
                    </Stack>
                    <Stack sx={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        maxWidth: '300px',
                        flexDirection: 'row',

                    }}>
                        <Typography className={toolbar('Description')}
                                    component="h5"
                        >
                            Трансформируем бизнес-процессы, повышаем производительность и сокращаем издержки в бизнесе
                        </Typography>
                    </Stack>

                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}
                           maxWidth={'800px'}>
                        <Typography className={toolbar('Subtitle')}
                                    component="h2"
                                    flexDirection={"column"}
                        >
                            <span>Консультация:</span>
                            <span style={{display: 'block'}}>+7(918)2921781</span>
                        </Typography>
                        <Link target={'_blank'} href="https://wa.me/79182921781"
                              color="inherit">
                            <IconButton color="inherit">
                                <WhatsAppIcon height={'40px'} width={'40px'}/>
                            </IconButton>
                        </Link>
                        <Link target={'_blank'} href="https://t.me/UliEffect"
                              color="inherit">
                            <IconButton color="inherit">
                                <TelegramIcon height={'40px'} width={'40px'}/>
                            </IconButton>
                        </Link>
                        {/*<Button className={toolbar('Button')} variant="contained">Заказать звонок</Button>*/}
                    </Stack>

                </Stack>}
            {isMobile ? (
                <Toolbar className={toolbar()} sx={{padding: 0}} variant="dense">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <IconButton className={toolbar('Icon')}
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                    onClick={handleBurgerClick}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Stack sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%'

                        }}>
                            <Logo width={'50px'} height={'50px'}/>
                            <Typography className={toolbar('Title')}
                                        component="h1"
                                        sx={{fontSize: '30px'}}
                            >
                                UliEffectPlus
                            </Typography>
                        </Stack>
                    </Stack>
                </Toolbar>
            ) : (
                <Toolbar className={toolbar()} sx={{padding: 0}} variant="dense">
                    {sections.map((section) => (
                        <Typography key={section.label}
                                    className={toolbar('Item', {active: section.active})}
                                    variant="h6"
                                    component="div"
                                    textAlign={'center'}
                                    sx={{flexGrow: 1}}
                                    onClick={section.onClick}
                        >
                            {section.label}
                        </Typography>
                    ))}
                </Toolbar>
            )}
            <BurgerMenu sections={sections} open={burgerOpen}
                        onClose={() => setBurgerOpen(false)}/>
        </AppBar>
    );
};

export default Header;
