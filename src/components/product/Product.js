import React from 'react';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';


import useStyle from './style'

function Product({product, onClick}) {
    const classes = useStyle()

    

    return (
       
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}s>
                </CardMedia>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant='h5'>
                            {product.price.formatted_with_symbol}
                        </Typography>
                        </div>
                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='textSecondary' />

                   
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions} >
                    <IconButton aria-label='add-to-cart' onClick={() => onClick(product.id, 1)}>
                        <AddShoppingCart></AddShoppingCart>
                    </IconButton>

                </CardActions>

            </Card>
        
    )

}

export default Product