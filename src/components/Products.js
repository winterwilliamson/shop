import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/Product';
import useStyle from './style'

 


function Products({products, handleClick}) {

    const classes = useStyle()

    return (

    <main className={classes.content}>
        <div className={classes.toolbar}></div>
    <Grid container spacing={4} justify='center' >
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Product product={product} onClick={handleClick}></Product>
            </Grid>

        ))}
    </Grid>
</main> 

    )

}

export default  Products

