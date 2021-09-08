import React from 'react';
import {Typography, List, ListItem, ListItemText} from '@material-ui/core'

function Review({checkoutToken}) {
    return (
        <div>
            <Typography gutterBottom variant='h5'>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((e) => (
                    <ListItem style={{padding: '10px 0' }} key={e.name}>
                     <ListItemText primary={e.name} secondary={`Quantity: ${e.quantity}`}>
                     </ListItemText><Typography variant='body2'>{e.line_total.formatted_with_symbol}</Typography>

                    </ListItem>
                   

                ))}
                 <ListItem style={{padding: '10px 0'}}> 
                 <ListItemText primary='Total'></ListItemText>
                 <Typography variant='subtitle1' style={{fontWeight: '700'}}> {checkoutToken.live.subtotal.formatted_with_symbol}</Typography>

                </ListItem>

            </List>

        </div>
    )

}

export default Review;