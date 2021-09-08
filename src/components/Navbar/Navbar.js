import React from 'react'
import {AppBar, Typography, IconButton, Toolbar, Badge } from '@material-ui/core';
import logo from '../../images/commerce.png'
import {ShoppingCart} from '@material-ui/icons'
import useStyle  from './style'
import {Link, useLocation} from 'react-router-dom';




function Navbar({totalItems}) {

    const classes = useStyle()
    const location = useLocation()

    return (
        <>
        <AppBar className={classes.appBar} position='fixed' color='inherint'>
            <Toolbar>
            <Typography component={Link} to='/shop/' className={classes.title} color='inherint' variant='h4'>
                <img src={logo} height='60px' alt='Commerce.js' className={classes.image}></img>
                Winter Shopping
            </Typography>
            <div className={classes.grow}></div>
          { location.pathname === '/shop/' && (

            <div className={classes.button}>
            <IconButton component={Link} to='/shop/cart' aria-label='Show Cart Times' className={classes.icon} color='inherint'>

                <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart></ShoppingCart>
                </Badge>

            </IconButton>

        </div>

          )}


            </Toolbar>
            

        </AppBar>

        </>

    )
}

export default Navbar;