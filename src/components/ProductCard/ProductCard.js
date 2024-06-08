import React from 'react';
import {CardActionArea, CardContent, Typography, Card, Grid} from "@mui/material";
import {cn} from "@bem-react/classname";
import './ProductCard.scss'

const ProductCard = ({title, children, price, xs, sm, md}) => {

    const cardCN = cn('ProductCard');
    return (
        <Grid className={cardCN('Wrapper')} item sx xs={xs} sm={sm} md={md}>
            <Card className={cardCN()}>
                {/*<CardActionArea>*/}
                <CardContent>
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
                    <Typography className={cardCN('Price')}
                                component={'p'}
                    >
                        {price}
                    </Typography>
                </CardContent>
                {/*</CardActionArea>*/}
            </Card>
        </Grid>
    );
};

export default ProductCard;