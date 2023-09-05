// React document

// Import necessary modules from React and the stylesheet
import React, { useState, useEffect } from 'react';
import './ReactBtcPayButton.css';

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
    const BTCPAY_DOMAIN = 'PUT_YOUR_BTCPAYSERVER_DOMAIN_URL_HERE>';  // ADD YOUR BTC PAY SERVER DOMAIN URL HERE
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
    // -------------------------------------------------- //

    // Define an array of currency options
    const CURRENCY_OPTIONS = [ 'SATS' ];  // OPTIONAL: Add more currencies, ex: BTC, USD, EUR, etc.

    // *** NOTE: If adding more currencies, a currency converter and code customization will be required.

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
    );
};
