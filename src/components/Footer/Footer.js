import React from 'react';
import {
    BottomNavigation, Button,
    Grid,
    IconButton,
    Link, Stack,
    Toolbar,
    Typography
} from "@mui/material";
import {cn} from "@bem-react/classname";
import './Footer.scss'
import TelegramIcon from '../TelegramIcon/TelegramIcon'
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import Logo from "../Logo/Logo";
import PhoneNumber from "../PhoneNumber/PhoneNumber";


const footerCN = cn('Footer');

const Footer = () => {
    return (
        <BottomNavigation className={footerCN('Wrapper')} component={'footer'}>
            <Toolbar className={footerCN()}>
                <Grid container
                      wrap={'nowrap'}
                      sx={{width: '100%'}}
                      justifyContent="space-between">
                    <Grid item>
                        <Stack sx={{
                            justifyContent: 'start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%'

                        }}>
                            <Logo width={'50px'} height={'50px'}/>
                            <Typography className={footerCN('Title')}
                                        component="h2"
                                        fontSize={'clamp(15px, 2vw, 20px)'}
                                // sx={{fontSize: '30px'}}
                            >
                                UliEffectPlus
                            </Typography>
                        </Stack>
                        {/*<Typography fontFamily={`"Wix Madefor Display", serif`} variant="body1" color="inherit">*/}
                        {/*    /!*<span style={{fontWeight: 'bold'}}>Телефон:</span> <span>+7(918)2921781</span>*!/*/}
                        {/*    <PhoneNumber/>*/}
                        {/*</Typography>*/}
                        <Typography fontFamily={`"Wix Madefor Display", serif`} variant="body1" color="inherit">
                            <span style={{fontWeight: 'bold'}}>Телефон: </span><PhoneNumber/>

                        </Typography>
                        <Typography fontFamily={`"Wix Madefor Display", serif`} variant="body1" color="inherit">
                            <span style={{fontWeight: 'bold'}}>Электронная почта: </span>
                            <span>team-optimization@ya.ru</span>
                        </Typography>
                        <Typography variant="body1" color="inherit">
                        	<span style={{ fontWeight: 'bold' }}>Место оказания услуг:</span> Краснодар и Краснодарский край
                        </Typography>
                    </Grid>
                    <Stack sx={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        maxWidth: '400px',
                        flexDirection: 'row',


                    }}>
                        <Typography className={footerCN('Description')} fontSize={'clamp(15px, 2vw, 20px)'}
                                    component="h5"
                        >
                            Повышаем эффективность бизнеса за счет корректировки бизнес-процессов
                        </Typography>
                    </Stack>
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }} item>
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
                        {/*<Button className={footerCN('Button')} variant="contained">Заказать звонок</Button>*/}
                    </Grid>
                </Grid>
            </Toolbar>
        </BottomNavigation>
    );
};

export default Footer;
