import React from 'react';
import {CardActionArea, CardContent, Typography, Card, Grid} from "@mui/material";
import {cn} from "@bem-react/classname";
import './MyCard.scss'
import Product1 from "../../image/product_bg/1.png";

const MyCard = ({title, children, xs, sm, md, background, image}) => {

    const cardCN = cn('Card');
    return (
        <Grid className={cardCN('Wrapper')} item xs={xs} sm={sm} md={md}>
            <Card className={cardCN()}
                  style={{
                      background,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                  }}>
                {/*<CardActionArea>*/}
                <img className={cardCN('Image')} src={image} alt={image}/>
                <CardContent

                    sx={{
                        position: 'relative',
                        borderRadius: '20px',
                        zIndex: 1,
                        height: '80%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center'
                    }}
                >
                    <Typography className={cardCN('Title')}
                                gutterBottom
                                variant="h5"
                                component="h3">
                        {title}
                    </Typography>
                    <Typography className={cardCN('Description')}
                                component={'p'}
                    >
                        {children}
                    </Typography>
                </CardContent>
                {/*</CardActionArea>*/}
            </Card>
        </Grid>
    );
};

export default MyCard;