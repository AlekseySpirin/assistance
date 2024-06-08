import React from 'react';
import {
	BottomNavigation, Button,
	Grid,
	IconButton,
	Link, Stack,
	Toolbar,
	Typography
} from "@mui/material";
import { cn } from "@bem-react/classname";
import './Footer.scss'
import TelegramIcon from '../TelegramIcon/TelegramIcon'
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import Logo from "../Logo/Logo";



const footerCN = cn('Footer');

const Footer = () => {
	return (
		<BottomNavigation className={footerCN('Wrapper')} component={'footer'}>
			<Toolbar className={footerCN()}>
				<Grid container
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
                                        component="h1"
                                        sx={{fontSize: '30px'}}
                            >
                                Assistance
                            </Typography>
                        </Stack>
						<Typography variant="body1" color="inherit">
							<span style={{ fontWeight: 'bold' }}>Телефон:</span> +7 978 775 7022
						</Typography>
						<Typography variant="body1" color="inherit">
							<span style={{ fontWeight: 'bold' }}>Электронная почта:</span> Электронная почта
						</Typography>
						<Typography variant="body1" color="inherit">
							<span style={{ fontWeight: 'bold' }}>Адрес:</span> Россия, Республика Крым, пгт. Черноморское, Адрес
						</Typography>
					</Grid>
					<Grid item>
						<Link target={'_blank'}  href="https://wa.me/79787322667" color="inherit">
							<IconButton color="inherit">
								<WhatsAppIcon height={'40px'} width={'40px'}/>
							</IconButton>
						</Link>
						<Link target={'_blank'}  href="https://t.me/natalia_kovpanec" color="inherit">
							<IconButton color="inherit">
								<TelegramIcon height={'40px'} width={'40px'}/>
							</IconButton>
						</Link>
						<Button className={footerCN('Button')} variant="contained">Заказать звонок</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</BottomNavigation>
	);
};

export default Footer;
