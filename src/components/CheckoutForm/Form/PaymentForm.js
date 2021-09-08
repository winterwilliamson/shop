import React from 'react';

import {CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js'
import Review from '../Review'
import { Button, Divider, Typography } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import Confirmation from './Confirmation'
 


const stripePromise = loadStripe('...')

function PaymentForm({checkoutToken, backStep}) {
    return (
        <div>
            <Review checkoutToken={checkoutToken}></Review>
            <Divider>

            </Divider>
            <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {( {elements , stripe}) => (
                        <form>
                            <CardElement>

                            </CardElement>
                            <br /> <br />
                            <div style={{display:'flex' ,justifyContent:'space-between'}} > 
                            <Button variant='contained' color='primary' onClick={backStep}> Back</Button>
                            <Button type='submit' component={Confirmation} variant='contained' color='primary' disabled={!stripe}> Pay {checkoutToken.live.subtotal.formatted_with_symbol}</Button>
                                 </div> 


                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
            
        </div>

    )
}

export default PaymentForm