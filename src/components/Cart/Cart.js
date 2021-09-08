import { Container, Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import useStyle from  './style'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'


function Cart({cart, removeCart, handleUpdateCart, emptyCart}) {
   
    const classes = useStyle()

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items Shopping Cart. <Link to='/shop/'>Add Something Here</Link></Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item )=> (
                <Grid item xs={12} sm={3}> 
                <div >
                       <CartItem item={item} removeCart={removeCart} handleUpdateCart={handleUpdateCart}></CartItem>
                </div>
                </Grid>
 
            ))}


        </Grid>
        <div className={classes.cardDetails}> 
        <Typography variant='h4'>SubTotal: {cart.subtotal.formatted_with_symbol} </Typography>
        <div>
            <Button className={classes.emptyButton} onClick={emptyCart} type='button' size='large' variant='contained' color='secondary'>Empty Cart</Button>
            <Button className={classes.checkoutButton}  type='button' size='large' variant='contained' color='primary' component={Link} to='/checkout'>Checkout</Button>

        </div>


        </div>
        </>
    )

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
        <div className={classes.toolbar}></div>
        <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart></EmptyCart> : <FilledCart></FilledCart> }
        </Container>
       

    )
}

export default Cart