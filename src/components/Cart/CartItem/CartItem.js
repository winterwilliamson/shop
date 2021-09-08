
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

function CartItem({item, removeCart, handleUpdateCart}) {
  const classes = useStyles()

    return (
        <Card>
            <CardMedia image={item.media.source} key={item.name} className={classes.media}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant='h6' >{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => handleUpdateCart(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => handleUpdateCart(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant='contained' onClick={() => removeCart(item.id)} type='button' color='secondary'>Remove</Button>
            </CardActions>

        </Card>

    )
}
 export default CartItem
