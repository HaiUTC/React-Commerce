import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
const stripeButton = ({price}) =>{
    const priceForStripe = price
    const publishableKey = 'pk_test_51IjeqvJDMD3dzcbuRr3ksFziO5Pr3eHAPA5DCUfaHaXjQsULwdAtrIEpLYEyOpk0vzRAOb0eDu5CL7uAddg5ngnf00nc6zyz32'

    const onToken = token =>{
        console.log(token)
        alert('Payment Success')
    }
    return (
        <StripeCheckout 
            label = 'Pay'
            name = 'Nike'
            shippingAddress
            billingAddress
            image = ''
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
}

export default stripeButton;