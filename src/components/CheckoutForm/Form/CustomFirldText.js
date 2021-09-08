import React from 'react'
import {Grid, TextField} from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'


function CustomField({name, label}) {
    const  { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller 

            render={({field}) =>  (
                <TextField {...field} fullWidth label={label} required></TextField>

            )}
            control={control}
            name={name}
             
            />



        </Grid>

    )
}

export default CustomField