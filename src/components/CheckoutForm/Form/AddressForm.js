import React, {useEffect, useState} from 'react'
import {InputLabel, Typography, Grid, Select, MenuItem, Button} from '@material-ui/core'
import { FormProvider , useForm} from 'react-hook-form'
import FormInput from './CustomFirldText'
import {Link} from 'react-router-dom'

import { commerce } from '../../../lib/commerce'

function AddressForm({checkoutToken, next}) {
  const methods = useForm()

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingcountry, setShippingCountry] = useState('');
  const [subDivitions, setSubdivisions] = useState([]);
  const [subDivition, setSubdivision]= useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
  const divitions = Object.entries(subDivitions).map(([code, name]) => ( {id: code, label: name}))
  const options = shippingOptions.map((sO) => ({id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))

  
  const fetchShippingCountry = async (checkoutTokenId)=> {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

    console.log(countries)
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0])   
  }


  const fetchSubdivitions = async(countryCode) => {

    const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

    console.log(subdivisions);
    setSubdivisions(subdivisions);
    setSubdivision(Object.keys(subdivisions)[0])

  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});

      setShippingOptions(options);
      setShippingOption(options[0].id)

  }

  useEffect(() => {
      fetchShippingCountry(checkoutToken.id)
      console.log(checkoutToken.id)
  },[])


  useEffect(() => {
    if(shippingcountry) fetchSubdivitions(shippingcountry);

},[shippingcountry])

  useEffect(() => {
      if(subDivition) fetchShippingOptions(checkoutToken.id, shippingcountry, subDivition)
  }, [subDivition])

    return (
        <>
        <Typography variant='h5' gutterBottom>
            Shipping Address
        </Typography>
        <FormProvider  {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({...data, shippingcountry, subDivition, shippingOption}))}>
                <Grid container spacing={3}>
                <FormInput required name='firstName' label='First Name'></FormInput>
                <FormInput required name='lastName' label='Last Name'></FormInput>
                <FormInput required name='address' label='Address'></FormInput>
                <FormInput required name='email' label='Email'></FormInput>
                <FormInput required name='city' label='City'></FormInput>
                <FormInput required name='zipcode' label='Zip Code'></FormInput>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select value={shippingcountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                        {countries.map((e) => (
                            <MenuItem key={e.id} value={e.id}> {e.label}</MenuItem>
                        ) )}

                    </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <InputLabel>SubDivitions</InputLabel>
                    <Select value={subDivition} fullWidth onChange={(e) => setSubdivision(e.target.value)}>
                        {divitions.map((e) => (
                            <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>
                        ))}

                    </Select>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Options</InputLabel>
                    <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value) }>
                       {options.map(e => (
                            <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>
                       ))}

                    </Select>

                </Grid>

               




                </Grid>
                <br />
                <div style={{display : 'flex', justifyContent: 'space-between'}}>
                    <Button component={Link} to='/cart' variant='outlined' color='secondary'>Back To Cart</Button>
                    <Button  type='submit' color='primary' variant='outlined' >Next</Button>

                </div>

                

            </form>
        </FormProvider>

            
        </>
    )

}
export default AddressForm