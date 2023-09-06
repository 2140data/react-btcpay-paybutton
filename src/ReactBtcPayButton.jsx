// React document

// Import necessary modules from React and the stylesheet
import React, { useState, useEffect } from 'react';
// import './ReactBtcPayButton.css';

// Define the ReactBtcPayButton component
export const ReactBtcPayButton = ({
    // Default settings that can be overridden when using this component
    jsonResponse = true,
    currency: currencyProp = '',
    defaultPaymentMethod = '',
    checkoutDesc = '',
    orderId = '',
    serverIpn = '',
    notifyEmail = '',
    browserRedirect = '',
    checkoutQueryString = '',
    submitBtnText = ''
}) => {


    // -------------------------------------------------- //
    //                                                    //
    //                   START SETUP                      //
    //                JUST 3 EASY STEPS                   //
    //                                                    //
    // -------------------------------------------------- //

    // -------------------------------------------------- //
    // STEP 1: Add your BTCPay domain and StoreID         //
    // -------------------------------------------------- //

    // Domain and Store ID for the BTCPay Server
    const BTCPAY_DOMAIN = 'PUT_YOUR_BTCPAYSERVER_DOMAIN_URL_HERE';  // ADD YOUR BTC PAY SERVER DOMAIN URL HERE
    const storeId = 'PUT_YOUR_BTCPAYSERVER_STORE_ID_HERE';  // ADD YOUR BTC PAY SERVER STORE ID HERE

    // -------------------------------------------------- //
    // STEP 2: Adjust the slider and input ranges         //
    // -------------------------------------------------- //

    // Minimum and maximum values for the input and slider
    const INPUT_MIN = 1;
    const INPUT_MAX = 21000000000000;
    const SLIDER_MIN = 1;
    const SLIDER_MAX = 250000;

    // -------------------------------------------------- //
    // STEP 3: Add component to your app (example below)  //
    // -------------------------------------------------- //

    // Example (put it in App.js or somewhere else):

    // <ReactBtcPayButton
    //   currency='SATS'
    //   defaultPaymentMethod='SATS'
    //   checkoutDesc='Your Description Here'
    //   orderId='Your Order ID'
    //   serverIpn='https://your-server-ipn.com'
    //   notifyEmail='your-email@example.com'
    //   browserRedirect='https://your-redirect.com'
    //   checkoutQueryString=''
    //   submitBtnText='Request Invoice'
    // />

    // -------------------------------------------------- //
    // OPTIONAL: Add currencies to dropdown (if needed)   //
    // OPTIONAL: Adjust custom CSS styles (if needed)   //
    // -------------------------------------------------- //

    // Define an array of currency options
    const CURRENCY_OPTIONS = ['SATS'];  // OPTIONAL: Add more currencies, ex: BTC, USD, EUR, etc.
    // *** NOTE: If adding more currencies, a currency converter and code customization will be required.

     // Adjust custom CSS styles
    const BtcPayButtonStyles = `
    .btcpay-form {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .btcpay-form--inline {
        flex-direction: row;
    }
    
    .btcpay-form--block {
        flex-direction: column;
    }
    
    .btcpay-form--inline .submit {
        margin-left: 15px;
    }
    
    .btcpay-form--block select {
        margin-bottom: 10px;
    }
    
    .btcpay-form .btcpay-custom-container {
        text-align: center;
    }
    
    .btcpay-custom {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .btcpay-input-price,
    .btcpay-input-range,
    select {
        margin-bottom: 0.5rem;
    }
    
    .btcpay-form .plus-minus {
        cursor: pointer;
        font-size: 25px;
        line-height: 25px;
        background: #DFE0E1;
        height: 30px;
        width: 45px;
        border: none;
        border-radius: 60px;
        margin: auto 5px;
        display: inline-flex;
        justify-content: center;
    }
    
    .btcpay-form select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        color: currentColor;
        background: transparent;
        border: 1px solid transparent;
        display: block;
        padding: 1px;
        margin-left: auto;
        margin-right: auto;
        font-size: 11px;
        cursor: pointer;
    }
    
    .btcpay-form select:hover {
        border-color: #ccc;
    }
    
    .btcpay-form option {
        color: #000;
        background: rgba(0, 0, 0, .1);
    }
    
    .btcpay-input-price {
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        appearance: textfield;
        border: none;
        box-shadow: none;
        text-align: center;
        font-size: 25px;
        margin: auto;
        border-radius: 5px;
        line-height: 35px;
        background: #fff;
        color: #000;
    }
    
    .btcpay-input-price::selection {
        background-color: lightblue;
        /* Replace with the desired light orange color */
    }
    
    .btcpay-input-price::-webkit-outer-spin-button,
    .btcpay-input-price::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    input[type=range].btcpay-input-range {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        background: transparent;
    }
    
    input[type=range].btcpay-input-range:focus {
        outline: 0;
    }
    
    input[type=range].btcpay-input-range::-webkit-slider-runnable-track {
        width: 100%;
        height: 3.1px;
        cursor: pointer;
        box-shadow: 0 0 1.7px #020, 0 0 0 #003c00;
        background: #f3f3f3;
        border-radius: 1px;
        border: 0;
    }
    
    input[type=range].btcpay-input-range::-webkit-slider-thumb {
        box-shadow: none;
        border: 2.5px solid #cedc21;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background: #0f3723;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -9.45px
    }
    
    input[type=range].btcpay-input-range:focus::-webkit-slider-runnable-track {
        background: #fff;
    }
    
    input[type=range].btcpay-input-range::-moz-range-track {
        width: 100%;
        height: 3.1px;
        cursor: pointer;
        box-shadow: 0 0 1.7px #020, 0 0 0 #003c00;
        background: #f3f3f3;
        border-radius: 1px;
        border: 0;
    }
    
    input[type=range].btcpay-input-range::-moz-range-thumb {
        box-shadow: none;
        border: 2.5px solid #cedc21;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background: #0f3723;
        cursor: pointer;
    }
    
    input[type=range].btcpay-input-range::-ms-track {
        width: 100%;
        height: 3.1px;
        cursor: pointer;
        background: 0 0;
        border-color: transparent;
        color: transparent;
    }
    
    input[type=range].btcpay-input-range::-ms-fill-lower {
        background: #e6e6e6;
        border: 0;
        border-radius: 2px;
        box-shadow: 0 0 1.7px #020, 0 0 0 #003c00;
    }
    
    input[type=range].btcpay-input-range::-ms-fill-upper {
        background: #f3f3f3;
        border: 0;
        border-radius: 2px;
        box-shadow: 0 0 1.7px #020, 0 0 0 #003c00;
    }
    
    input[type=range].btcpay-input-range::-ms-thumb {
        box-shadow: none;
        border: 2.5px solid #cedc21;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background: #0f3723;
        cursor: pointer;
        height: 3.1px;
    }
    
    input[type=range].btcpay-input-range:focus::-ms-fill-lower {
        background: #f3f3f3;
    }
    
    input[type=range].btcpay-input-range:focus::-ms-fill-upper {
        background: #fff;
    }
    
    .submit-btn {
        margin-top: 1rem;
        margin-bottom: 2rem;
        min-width: 168px; /* Minimum width of button */
        min-height: 46px; /* Minimum height of button */
        border-radius: 4px; /* Rounded corners of button */
        border-style: none; /* Border of button */
        background-color: #0f3b21;
        cursor: pointer;
        border: 2px solid transparent;
    }
    
    .submit-btn:hover {
        border: 2px solid #cedc21;
    }
    
    .submit-btn:active {
        border: 1px solid #cedc21;
    }
    
    .submit-btn span {
        color: #fff;
        font-size: 16px;
    }
    
    .submit-btn img {
        height: 46px;
        display: inline-block;
        padding: 4% 0 4% 7px;
        vertical-align: middle;
    }
  `;

    // -------------------------------------------------- //
    //                                                    //
    //                   END USER SETUP                   //
    //            DO NOT CHANGE ANYTHING BELOW!           //
    //                                                    //
    // -------------------------------------------------- //


    // State variables to hold the price and currency
    const [price, setPrice] = useState(1);
    const [currency, setCurrency] = useState(currencyProp);

    // Function to handle changes in the slider
    const handleSliderChange = (e) => {
        const sanitizedValue = parseInt(e.target.value, 10);
        if (!isNaN(sanitizedValue) && sanitizedValue >= SLIDER_MIN && sanitizedValue <= SLIDER_MAX) {
            setPrice(sanitizedValue);
        }
    };

    // Function to handle changes in the price input
    const handlePriceChange = (e) => {
        let newPrice = parseInt(e.target.value.replace(/,/g, ''), 10);
        if (!isNaN(newPrice) && newPrice >= INPUT_MIN && newPrice <= INPUT_MAX) {
            setPrice(newPrice);
        }
    };

    // Function to format the price with commas
    const formatPrice = (price) => {
        return price.toLocaleString('en-US'); // Optional: Edit as needed
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200 && this.responseText) {
                const parsedResponse = JSON.parse(this.responseText);
                if (parsedResponse && parsedResponse.invoiceId) {
                    window.btcpay.appendInvoiceFrame(parsedResponse.invoiceId);
                }
            }
        };
        xhttp.open('POST', e.target.getAttribute('action'), true);
        xhttp.send(new FormData(e.target));
    };

    // Load BTCPay script if it's not already loaded (Modal version)
    useEffect(() => {
        if (!window.btcpay) {
            const script = document.createElement('script');
            script.src = `https://${BTCPAY_DOMAIN}/modal/btcpay.js`;
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    }, []);


    // The form that will be displayed
    return (
        <>
            {/* Add the <style> block to inject the CSS */}
            <style>
                {BtcPayButtonStyles}
            </style>
            <form
                className="btcpay-form btcpay-form--block"
                method="POST"
                action={`https://${BTCPAY_DOMAIN}/api/v1/invoices`}
                onSubmit={handleFormSubmit}
            >
                {/* Customizable fields for price and currency */}
                <div className="btcpay-custom">
                    <input
                        className="btcpay-input-price"
                        type="text"
                        name="price"
                        min={INPUT_MIN}
                        max={INPUT_MAX}
                        value={formatPrice(price)}
                        onChange={handlePriceChange}
                    />
                    <select name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        {CURRENCY_OPTIONS.map((curr) => (
                            <option key={curr} value={curr}>{curr}</option>
                        ))}
                    </select>

                    {/* Hidden fields for server settings */}
                    <input type="hidden" name="storeId" value={storeId} />
                    <input type="hidden" name="jsonResponse" value={jsonResponse} />

                    {/* Hidden fields for additional settings */}
                    <input type="hidden" name="defaultPaymentMethod" value={defaultPaymentMethod} />
                    <input type="hidden" name="checkoutDesc" value={checkoutDesc} />
                    <input type="hidden" name="orderId" value={orderId} />
                    <input type="hidden" name="serverIpn" value={serverIpn} />
                    <input type="hidden" name="notifyEmail" value={notifyEmail} />
                    <input type="hidden" name="browserRedirect" value={browserRedirect} />
                    <input type="hidden" name="checkoutQueryString" value={checkoutQueryString} />

                    {/* Slider for adjusting price */}
                    <input
                        className="btcpay-input-range"
                        type="range"
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        value={price}
                        onChange={handleSliderChange}
                    />
                </div>

                {/* Submit button */}
                <button className="submit-btn" type="submit">
                    <span>{submitBtnText}</span>
                </button>
            </form>
        </>
    );
};
