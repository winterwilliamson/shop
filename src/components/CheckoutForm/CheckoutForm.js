
import { Paper, StepLabel, Stepper, Typography, Step } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import AddressForm from './Form/AddressForm'
import PaymentForm from './Form/PaymentForm'
import useStyle from './style'
import {commerce} from '../../lib/commerce'

const steps = ['Shipping Address', 'Payment Details']

function CheckoutForm({cart}) {
    const [activeStep, setStep] = useState(0)
    const [checkoutToken, setCheckToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const classes = useStyle()


    useEffect(() => {
        const generateToken = async() => {
            try {
                     const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
                     console.log(token)

                     setCheckToken(token)



            } catch(error) {

            }
        }
        generateToken()

    }, [cart])

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const backStep = () => setStep((prevStep ) => prevStep - 1)

    const next = (data) => {
        setShippingData(data)

        nextStep()
    }

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}></AddressForm> : <PaymentForm backStep={backStep} checkoutToken={checkoutToken}></PaymentForm>



    return (
        <>
        <div className={classes.toolbar}>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography align='center' variant='h4'>
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                      <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}

                </Stepper>
                {activeStep === steps.length ? <Confirmation></Confirmation> : checkoutToken && <Form></Form>}

            </Paper>

        </main>

        </div>
        </>
    )

}

export default CheckoutForm;