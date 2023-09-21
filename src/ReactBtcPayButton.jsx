// React document

// Import necessary modules from React and the stylesheet
import React, { useState, useEffect } from 'react';
// OPTIONAL: import PropTypes from 'prop-types';

// Define the ReactBtcPayButton component
export const ReactBtcPayButton = ({
    // Default settings that can be overridden when using this component
    // REQUIRED
    btcPayDomain = '', // Required
    storeId = '', // Required
    // ADDITIONAL
    browserRedirect = '', // Default
    checkoutDesc = '', // Default
    checkoutQueryString = '', // Default
    currency: currencyProp = 'SATS', // Default
    currencyOptions = ['SATS'], // Default
    defaultPaymentMethod = '', // Default
    imageShow = true, // Default
    imageSize = '46px', // Default
    inputMax = 21000000000000, // Default
    inputMin = 1, // Default
    jsonResponse = true, // Default
    mode = 'Slider', // Default
    notifyEmail = '', // Default
    orderId = '', // Default
    serverIpn = '', // Default
    sliderMax = 250000, // Default
    sliderMin = 1, // Default
    submitBtnText = 'Pay with ', // Default
    // STYLES
    amountInputStyles: customAmountInputStyles = {},
    formStyles: customFormStyles = {},
    imageStyles: customImageStyles = {},
    innerContainerStyles: customInnerContainerStyles = {},
    outerContainerStyles: customOuterContainerStyles = {},
    plusMinusButtonStyles: customPlusMinusButtonStyles = {},
    rangeInputStyles: customRangeInputStyles = {},
    selectOptionStyles: customSelectOptionStyles = {},
    selectStyles: customSelectStyles = {},
    submitButtonStyles: customSubmitButtonStyles = {},
    submitButtonTextStyles: customSubmitButtonTextStyles = {},
}) => {
    const [isSelectHover, setIsSelectHover] = useState(false);
    const [isSubmitButtonHover, setIsSubmitButtonHover] = useState(false);
    // State variables to hold the price and currency
    const [price, setPrice] = useState(1);
    const [currency, setCurrency] = useState(currencyProp);
    const [prevCurrency, setPrevCurrency] = useState(currency);
    // State to track if the input field is focused
    const [isFocused, setIsFocused] = React.useState(false);

    const formStyles = {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...customFormStyles,
    }

    const outerContainerStyles = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        ...customOuterContainerStyles,
    }

    const innerContainerStyles = {
        display: 'flex',
        flexDirection: mode.toLowerCase() === 'custom' ? 'row' : 'column',
        gap: '0.5rem',
        ...customInnerContainerStyles,
    }

    const plusMinusButtonStyles = {
        cursor: 'pointer',
        fontSize: '25px',
        lineHeight: '25px',
        color: '#000',
        background: '#DFE0E1',
        height: '30px',
        width: '45px',
        border: 'none',
        borderRadius: '60px',
        margin: 'auto 5px',
        display: 'inline-flex',
        justifyContent: 'center',
        ...customPlusMinusButtonStyles,
    }

    const selectStyles = {
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        color: 'currentColor',
        background: 'transparent',
        border: '1px solid',
        borderColor: isSelectHover ? '#ccc' : 'transparent',
        display: 'block',
        padding: '1px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        fontSize: '11px',
        cursor: 'pointer',
        ...customSelectStyles,
    }

    const selectOptionStyles = {
        color: '#000',
        background: 'rgba(0, 0, 0, .1)',
        ...customSelectOptionStyles,
    }

    const amountInputStyles = {
        MozAppearance: 'textfield',
        WebkitAppearance: 'textfield',
        appearance: 'textfield',
        border: 'none',
        boxShadow: 'none',
        textAlign: 'center',
        fontSize: '25px',
        margin: 'auto',
        marginBottom: 0,
        borderRadius: '5px',
        lineHeight: '35px',
        background: '#fff',
        color: '#000',
        width: mode.toLowerCase() === 'custom' ? '140px' : undefined,
        maxWidth: mode.toLowerCase() === 'custom' ? '100%' : undefined,
        ...customAmountInputStyles,
    }

    const rangeInputStyles = {
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        width: '100%',
        background: 'transparent',
        marginTop: '10px',
        marginBottom: 0,
        outline: 0,
        ...customRangeInputStyles,
    }

    const submitButtonStyles = {
        marginTop: '1rem',
        marginBottom: '2rem',
        minWidth: '168px',
        minHeight: imageSize,
        borderRadius: '4px',
        backgroundColor: '#0f3b21',
        cursor: 'pointer',
        border: isSubmitButtonHover ? '2px solid #cedc21' : '2px solid transparent',
        ...customSubmitButtonStyles,
    }

    const submitButtonTextStyles = {
        color: '#fff',
        fontSize: '16px',
        ...customSubmitButtonTextStyles,
    }

    const imageStyles = {
        height: imageSize,
        display: 'inline-block',
        padding: '5% 0 5% 5px',
        verticalAlign: 'middle',
        ...customImageStyles,
    };

    // Default CSS styles
    const btcPayButtonStyles = `
        .btcpay-input-price::selection {
            background-color: lightblue;
        }
        .btcpay-input-price::-webkit-outer-spin-button,
        .btcpay-input-price::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
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
    
        .submit-btn:active {
            border: 1px solid #cedc21;
        }

        .submit-btn img {
            height: 46px;
            display: inline-block;
            padding: 4% 0 4% 7px;
            vertical-align: middle;
        }
    `;

    // Function to handle focus on the input
    const handleFocus = () => {
        setIsFocused(true);
    };

    // Function to handle blur on the input
    const handleBlur = () => {
        setIsFocused(false);
        // Re-format the price when the input loses focus
        setPrice(prevPrice => parseFloat(prevPrice).toFixed(8));
    };

    // Function to handle changes in currency selection
    const handleCurrencyChange = (e) => {
        // Get the newly selected currency from the event
        const newCurrency = e.target.value;

        // Update the current currency state
        setCurrency(newCurrency);

        // Conversion constants
        const SATS_PER_BTC = 100000000;

        // Handle currency conversion between SATs and BTC
        if (prevCurrency === 'SATS' && newCurrency === 'BTC') {
            // Convert SATs to BTC by dividing by 100,000,000 and rounding to 8 decimal places
            setPrice((price / SATS_PER_BTC).toFixed(8));
        } else if (prevCurrency === 'BTC' && newCurrency === 'SATS') {
            // Convert BTC to SATs by multiplying by 100,000,000 and flooring to an integer
            setPrice(Math.floor(price * SATS_PER_BTC));
        }

        // Update the previous currency state for future conversions
        setPrevCurrency(newCurrency);
    };

    // Function to handle changes in the slider
    const handleSliderChange = (e) => {
        const scrubbedValue = parseInt(e.target.value, 10);
        if (!isNaN(scrubbedValue) && scrubbedValue >= sliderMin && scrubbedValue <= sliderMax) {
            setPrice(scrubbedValue);
        }
    };

    // Function to handle changes in the price input
    const handlePriceChange = (e) => {
        // Remove commas from the input value for processing
        const rawValue = e.target.value.replace(/,/g, '');

        // Initialize newPrice variable
        let newPrice;

        // Convert to appropriate number type based on currency
        newPrice = (currency === 'BTC') ? parseFloat(rawValue) : parseInt(rawValue, 10);

        // Handle empty or invalid input
        if (rawValue === '' || isNaN(newPrice)) {
            setPrice(0);
            return;
        }

        // Special handling for BTC currency
        if (currency === 'BTC') {
            // Preserve decimal point if it's the last character
            if (rawValue.endsWith('.')) {
                setPrice(rawValue);
                return;
            }
            // Update price based on focus state
            setPrice(isFocused ? rawValue : newPrice.toFixed(8));
            return;
        }

        // Validate newPrice against inputMin and inputMax for other currencies
        if (newPrice >= inputMin && newPrice <= inputMax) {
            setPrice(newPrice);
        }
    };

    // Function to format the price based on the currency type
    const formatPrice = (price, curr) => {
        // Convert price to float and integer for calculations
        const numPrice = parseFloat(price);
        const intPrice = parseInt(price, 10);

        // Handle Bitcoin (BTC) formatting
        if (curr === 'BTC') {
            return isFocused ? price : formatBTC(numPrice);
        }

        // Handle Satoshi (SATS) formatting
        if (curr === 'SATS') {
            return intPrice.toLocaleString();
        }

        // Handle Fiat currencies like USD and EUR (ADD MORE HERE)
        if (['USD', 'EUR', 'CAD', 'AUD'].includes(curr)) {
            return numPrice.toLocaleString('en-US');
        }

        // Default: Return the original price for other currencies
        return price;
    };

    // Helper function to format Bitcoin (BTC) prices
    const formatBTC = (price) => {
        // Convert to 8 decimal places
        const formatted = price.toFixed(8);
        const [whole, decimal] = formatted.split('.');

        // Remove trailing zeros in decimal part
        return decimal === '00000000'
            ? parseInt(whole, 10).toLocaleString()
            : formatted.toLocaleString('en-US', { minimumFractionDigits: 8, maximumFractionDigits: 8 });
    };

    // Function to increment or decrement price
    const handlePlusMinus = (type, step, min, max) => {
        const parsedPrice = parseInt(price, 10);
        const newPrice = type === '-' ? Math.max(parsedPrice - step, min) : Math.min(parsedPrice + step, max);
        setPrice(newPrice);
    };

    // Wrapper functions to use with increment/decrement onClick
    const handleIncrement = () => handlePlusMinus('+', 1, 1, inputMax);
    const handleDecrement = () => handlePlusMinus('-', 1, 1, inputMax);

    // Handle hover on select element
    const handleSelectMouseEnter = () => {
        setIsSelectHover(true);
    };
    const handleSelectMouseLeave = () => {
        setIsSelectHover(false);
    };

    // Handle interactions with submit button element
    const handleSubmitButtonMouseEnter = () => {
        setIsSubmitButtonHover(true);
    };
    const handleSubmitButtonMouseLeave = () => {
        setIsSubmitButtonHover(false);
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

    // Function to strip 'http://' or 'https://' from the domain
    const stripHttpHttps = (domain) => {
        return domain.replace(/^https?:\/\//, '');
    };

    // Load BTCPay script if it's not already loaded (Modal version)
    useEffect(() => {
        if (!window.btcpay) {
            const strippedDomain = stripHttpHttps(btcPayDomain);
            const existingScript = document.querySelector(`script[src="https://${strippedDomain}/modal/btcpay.js"]`);
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = `https://${strippedDomain}/modal/btcpay.js`;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        }
    }, [btcPayDomain]);

    // Inject styles into head
    useEffect(() => {
        // Check if the style tag already exists
        const existingStyle = document.querySelector('style[data-btcpay]');
        if (!existingStyle) {
            const styleTag = document.createElement('style');
            styleTag.setAttribute('data-btcpay', ''); // add an attribute to mark this style tag
            styleTag.innerHTML = btcPayButtonStyles;
            document.getElementsByTagName('head')[0].appendChild(styleTag);
        }
    }, [btcPayButtonStyles]);


    // The form that will be displayed
    return (
        <form
            method="POST"
            action={`https://${stripHttpHttps(btcPayDomain)}/api/v1/invoices`}
            onSubmit={handleFormSubmit}
            style={formStyles}
        >
            {/* Container for price and currency inputs */}
            <div style={outerContainerStyles}>

                {/* 'Fixed' mode */}
                {mode.toLowerCase() === 'fixed' && (
                    <div style={innerContainerStyles}>
                        <input
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={amountInputStyles}
                            className="btcpay-input-price"
                            type="text"
                            name="price"
                            min={inputMin}
                            max={inputMax}
                            value={formatPrice(price, currency)}
                            onChange={handlePriceChange}
                        />
                    </div>
                )}

                {/* 'Custom' mode */}
                {mode.toLowerCase() === 'custom' && (
                    <div style={innerContainerStyles}>
                        <button
                            style={plusMinusButtonStyles}
                            type="button"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <input
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={amountInputStyles}
                            className="btcpay-input-price"
                            type="text"
                            name="price"
                            value={formatPrice(price, currency)}
                            onChange={handlePriceChange}
                        />
                        <button
                            style={plusMinusButtonStyles}
                            type="button"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                )}

                {/* 'Slider' mode */}
                {mode.toLowerCase() === 'slider' && (
                    <div style={innerContainerStyles}>
                        <input
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={amountInputStyles}
                            className="btcpay-input-price"
                            type="text"
                            name="price"
                            min={inputMin}
                            max={inputMax}
                            value={formatPrice(price, currency)}
                            onChange={handlePriceChange}
                        />
                        <input
                            style={rangeInputStyles}
                            className="btcpay-input-range"
                            type="range"
                            min={sliderMin}
                            max={sliderMax}
                            value={price}
                            onChange={handleSliderChange}
                        />
                    </div>
                )}

                {/* Currency dropdown */}
                <select
                    name="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                    onMouseEnter={handleSelectMouseEnter}
                    onMouseLeave={handleSelectMouseLeave}
                    style={selectStyles}
                >
                    {currencyOptions.map((curr) => (
                        <option
                            key={curr}
                            value={curr}
                            style={selectOptionStyles}
                        >
                            {curr}
                        </option>
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

            </div>

            {/* Submit button */}
            <button
                style={submitButtonStyles}
                className="submit-btn"
                type="submit"
                onMouseEnter={handleSubmitButtonMouseEnter}
                onMouseLeave={handleSubmitButtonMouseLeave}
            >
                <span style={submitButtonTextStyles}>
                    {submitBtnText}
                </span>
                {imageShow && (
                    <img
                        src={`https://${stripHttpHttps(btcPayDomain)}/img/paybutton/logo.svg`}
                        alt="BTCPay Logo"
                        style={imageStyles}
                    />
                )}
            </button>
        </form>
    );

    // OPTIONAL: Run 'npm install prop-types' then import PropTypes from 'prop-types';
    // ReactBtcPayButton.propTypes = {
    //     browserRedirect: PropTypes.string,
    //     btcPayDomain: PropTypes.string,
    //     checkoutDesc: PropTypes.string,
    //     checkoutQueryString: PropTypes.string,
    //     currency: PropTypes.string,
    //     currencyOptions: PropTypes.arrayOf(PropTypes.string),
    //     defaultPaymentMethod: PropTypes.string,
    //     imageShow: PropTypes.bool,
    //     imageSize: PropTypes.string,
    //     inputMax: PropTypes.number,
    //     inputMin: PropTypes.number,
    //     jsonResponse: PropTypes.bool,
    //     mode: PropTypes.string,
    //     notifyEmail: PropTypes.string,
    //     orderId: PropTypes.string,
    //     serverIpn: PropTypes.string,
    //     sliderMax: PropTypes.number,
    //     sliderMin: PropTypes.number,
    //     storeId: PropTypes.string,
    //     submitBtnText: PropTypes.string,
    // };

};
