import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useStateContext } from '../../context/StateContext'


const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 700000,
    publicKey: 'pk_test_d952a1215d7aa35e20067bf8b846345ea0495602'
};

// you can call this function anything
const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
};

// you can call this function anything
const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
}

const Paystack = () => {
    const initializePayment = usePaystackPayment(config);
    const { totalQuantities, totalPrice, setShowCart, cartItems, toggleCartItemQuantity, onRemove } = useStateContext();
    return (
        <div>
            <button className="btn-pay" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>PAY WITH PAYSTACK</button>
        </div>

    );
};

function App() {
    return (
        <div className="App">

            <Paystack />

        </div>
    );
}

export default App;