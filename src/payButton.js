import React from 'react';
import { PaystackButton } from 'react-paystack'


const PayButton = ({ amount, email }) => {
  const publicKey = process.env.REACT_APP_API_KEY;
  const [reference, setReference] = React.useState('');

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
  }

  const componentProps = {
    email,
    amount,
    publicKey,
    text: 'Donate Now',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => alert('Payment canceled by user.'),
  };

  return <PaystackButton {...componentProps} />;
};

export default PayButton;
