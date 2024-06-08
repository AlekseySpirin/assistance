import React from 'react';
import {CardActionArea, CardContent, Typography, Card, Grid} from "@mui/material";
import {cn} from "@bem-react/classname";
import './MyCard.scss'

const MyCard = ({title, children}) => {

    const cardCN = cn('Card');
    return (
        <Grid className={cardCN('Wrapper')} item sx xs={16} sm={8} md={4}>
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
                </CardContent>
                {/*</CardActionArea>*/}
            </Card>
        </Grid>
    );
};

export default MyCard;