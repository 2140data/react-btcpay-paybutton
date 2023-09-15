// React document

// Import necessary modules from React and the stylesheet
import React, { useState, useEffect } from 'react';
// OPTIONAL: import PropTypes from 'prop-types';

// Define the ReactBtcPayButton component
export const ReactBtcPayButton = ({
    // Default settings that can be overridden when using this component
    jsonResponse = true,
    currency: currencyProp = 'SATS',
    currencyOptions = ['SATS'],
    defaultPaymentMethod = 'SATS',
    checkoutDesc = '',
    orderId = '',
    serverIpn = '',
    notifyEmail = '',
    browserRedirect = '',
    checkoutQueryString = '',
    submitBtnText = 'Pay with ',
    btcPayDomain = '', // Required
    storeId = '', // Required
    mode = 'Slider',
    inputMin = 1,
    inputMax = 21000000000000,
    customMax = 21000000000000,
    sliderMin = 1,
    sliderMax = 250000,
    showImage = false,
    imageSize = '57px',
}) => {
    const [isSelectHover, setIsSelectHover] = useState(false);
    const [isSubmitButtonHover, setIsSubmitButtonHover] = useState(false);

    const formStyles = {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const containerStyles = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    }

    const customContainerStyles = {
        display: 'flex',
        flexDirection: mode.toLowerCase() === 'custom' ? 'row' : 'column',
        gap: '0.5rem',
    }

    const plusMinusButtonStyles = {
        cursor: 'pointer',
        fontSize: '25px',
        lineHeight: '25px',
        background: '#DFE0E1',
        height: '30px',
        width: '45px',
        border: 'none',
        borderRadius: '60px',
        margin: 'auto 5px',
        display: 'inline-flex',
        justifyContent: 'center',
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
    }

    const selectOptionStyles = {
        color: '#000',
        background: 'rgba(0, 0, 0, .1)',
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
    }

    const submitButtonTextStyles = {
        color: '#fff',
        fontSize: '16px',
    }

    const imageStyles = {
        height: imageSize,
        display: 'inline-block',
        padding: '5% 0 5% 5px',
        verticalAlign: 'middle',
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

    // State variables to hold the price and currency
    const [price, setPrice] = useState(1);
    const [currency, setCurrency] = useState(currencyProp);

    // Function to handle changes in the slider
    const handleSliderChange = (e) => {
        const scrubbedValue = parseInt(e.target.value, 10);
        if (!isNaN(scrubbedValue) && scrubbedValue >= sliderMin && scrubbedValue <= sliderMax) {
            setPrice(scrubbedValue);
        }
    };

    // Function to handle changes in the price input
    const handlePriceChange = (e) => {
        let newValue = e.target.value.replace(/,/g, '');
        let newPrice = parseInt(newValue, 10);

        // If the value is empty or NaN, default to '0'
        if (newValue === '' || isNaN(newPrice)) {
            setPrice(0);
            return;
        }

        if (newPrice >= inputMin && newPrice <= inputMax) {
            setPrice(newPrice);
        }
    };

    // Function to increment or decrement price
    const handlePlusMinus = (type, step, min, max) => {
        const parsedPrice = parseInt(price, 10);
        const newPrice = type === '-' ? Math.max(parsedPrice - step, min) : Math.min(parsedPrice + step, max);
        setPrice(newPrice);
    };

    // Wrapper functions to use with increment/decrement onClick
    const handleIncrement = () => handlePlusMinus('+', 1, 1, customMax);
    const handleDecrement = () => handlePlusMinus('-', 1, 1, customMax);

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
            // Check if script is already added
            const existingScript = document.querySelector(`script[src="https://${btcPayDomain}/modal/btcpay.js"]`);
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = `https://${btcPayDomain}/modal/btcpay.js`;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        }
    }, [ btcPayDomain ]);

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
    }, [ btcPayButtonStyles ]);


    
    // The form that will be displayed
    return (
        <form
            method="POST"
            action={`https://${btcPayDomain}/api/v1/invoices`}
            onSubmit={handleFormSubmit}
            style={formStyles}
        >
            {/* Container for price and currency inputs */}
            <div style={containerStyles}>

                {/* 'Fixed' mode */}
                {mode.toLowerCase() === 'fixed' && (
                    <div style={customContainerStyles}>
                        <input
                            style={amountInputStyles}
                            className="btcpay-input-price"
                            type="text"
                            name="price"
                            min={inputMin}
                            max={inputMax}
                            value={formatPrice(price)}
                            onChange={handlePriceChange}
                        />
                    </div>
                )}

                {/* 'Custom' mode */}
                {mode.toLowerCase() === 'custom' && (
                    <div style={customContainerStyles}>
                        <button
                            style={plusMinusButtonStyles}
                            type="button"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <input
                            style={amountInputStyles}
                            className="btcpay-input-price"
                            type="text"
                            name="price"
                            value={formatPrice(price)}
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
                    <div style={customContainerStyles}>
                        <input
                            style={amountInputStyles}
                            className="btcpay-input-price"
                            type="text"
                            name="price"
                            min={inputMin}
                            max={inputMax}
                            value={formatPrice(price)}
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
                    onChange={(e) => setCurrency(e.target.value)}
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
                {showImage && (
                    <img 
                        src={`https://${btcPayDomain}/img/paybutton/logo.svg`}
                        alt="BTCPay Logo"
                        style={imageStyles}
                    />
                )}
            </button>
        </form>
    );

    // OPTIONAL: Run 'npm install prop-types' then import PropTypes from 'prop-types';
    // ReactBtcPayButton.propTypes = {
    //     jsonResponse: PropTypes.bool,
    //     currency: PropTypes.string,
    //     currencyOptions: PropTypes.arrayOf(PropTypes.string),
    //     defaultPaymentMethod: PropTypes.string,
    //     checkoutDesc: PropTypes.string,
    //     orderId: PropTypes.string,
    //     serverIpn: PropTypes.string,
    //     notifyEmail: PropTypes.string,
    //     browserRedirect: PropTypes.string,
    //     checkoutQueryString: PropTypes.string,
    //     submitBtnText: PropTypes.string,
    //     btcPayDomain: PropTypes.string,
    //     storeId: PropTypes.string,
    //     mode: PropTypes.string,
    //     inputMin: PropTypes.number,
    //     inputMax: PropTypes.number,
    //     customMax: PropTypes.number,
    //     sliderMin: PropTypes.number,
    //     sliderMax: PropTypes.number,
    //     showImage: PropTypes.bool,
    //     imageSize: PropTypes.string,
    // };

};
