# React BTCPay Server Pay Button

## Overview

The React BTCPay Server Pay Button is a highly customizable and easy-to-integrate component that allows you to add a BTCPay Server Pay Button to your React application. With just a few lines of code, you can enable Bitcoin payments right within your React app.

## Features

- **Easy Setup**: Just 3 easy steps to add the button to your React app.
- **Highly Customizable**: Modify button text, currency options, and more.
- **Secure**: All transactions are processed through your BTCPay Server.

## Requirements

- **BTCPay Server**: You must have access to a BTCPay Server, either self-hosted or through a third-party in order to handle payments.
- **React Application**: This component is intended to be used within an existing React application.

## Installation

### Manual Installation

1. Run `npm install react-btcpay-paybutton` to install the package into your React project.
2. Follow the steps below to add the `ReactBtcPayButton` component to your app.

## Quick Start

Here's how you can add the React BTCPay Server Pay Button to your application:

### Step 1: Import the Component

```jsx
import { ReactBtcPayButton } from 'react-btcpay-paybutton';
```

### Step 2: Add Component to Your App

To integrate the React BTCPay Button into your application, simply include it in your JSX as shown below (with optional settings):

```jsx
<ReactBtcPayButton
  currency='SATS' // Default currency
  currencyOptions={['SATS']} // Comma-separated values: 'BTC', 'USD'
  defaultPaymentMethod='SATS' // Payment method
  checkoutDesc='Your Description Here' // Checkout description
  orderId='Your Order ID' // Order ID
  serverIpn='https://your-server-ipn.com' // Server IPN
  notifyEmail='your-email@example.com' // Notifications email address
  browserRedirect='https://your-redirect.com' // Browser redirect URL
  submitBtnText='Request Invoice' // Submit button text
  btcPayDomain='yourserver.com' // BTCPay Server Domain (example: yourserver.com)
  storeId='yourstoreid' // Store ID
  mode='Fixed' // Options: 'Fixed', 'Custom', 'Slider'
  inputMin={1} // Input field minimum
  inputMax={21000000000000} // Input field maximum
  sliderMin={1} // Slider minimum
  sliderMax={250000} // Slider maximum
  showImage = {false} // Show the image in the button? {true} or {false}
  imageSize = '57px' // Image height. BTCPay Server default options: '57px', '46px', or '40px'
/>
```

### Step 3: Customize Settings and Design

The `ReactBtcPayButton` component accepts various props that allow you to customize its behavior and appearance. Below are detailed explanations for each of these props:

- **`currency`**:  
  Specifies the default currency you would like to use for payments. The default value is `'SATS'`.

- **`currencyOptions`**:  
  An array that defines the set of currencies that you can choose from. For example, you can set it to `['BTC', 'USD']` to enable Bitcoin and U.S. Dollar as options.

- **`defaultPaymentMethod`**:  
  Specifies the payment method that should be pre-selected when the component loads. For example, setting this to `'SATS'` would make SATS the initially selected payment method.

- **`checkoutDesc`**:  
  The description that appears on the checkout invoice. You can use this field to describe the product or service you are offering.

- **`orderId`**:  
  An identifier for the order. This can be useful for keeping track of transactions.

- **`serverIpn`**:  
  The URL of the server where Instant Payment Notifications (IPN) will be sent. The server must be capable of handling POST requests.

- **`notifyEmail`**:  
  The email address where notifications about the transaction will be sent.

- **`browserRedirect`**:  
  The URL to which the browser will be redirected after the payment process is completed or cancelled.

- **`submitBtnText`**:  
  The text displayed on the submit button. For example, setting this prop to `'Pay Now'` would change the button text to 'Pay Now'.

- **`btcPayDomain`**:  
  The domain where your BTCPay Server is hosted. Replace this with your BTCPay Server domain.

- **`storeId`**:  
  The ID of your store on the BTCPay Server. Replace this with your specific store ID.

- **`mode`**:  
  The display mode of the BTCPay form. Select: 'Fixed', 'Custom', or 'Slider'.

- **`inputMin`**:  
  Specifies the minimum amount that can be entered in the input field.

- **`inputMax`**:  
  Specifies the maximum amount that can be entered in the input field.

- **`sliderMin`**:  
  Specifies the minimum value for the payment slider.

- **`sliderMax`**:  
  Specifies the maximum value for the payment slider.


## Documentation

For more detailed information and advanced customization options, please refer to the [BTCPay Server Documentation](https://docs.btcpayserver.org/) and [React Documentation](https://legacy.reactjs.org/docs/getting-started.html).

## Contributing

Feel free to report issues, suggest features, and submit pull requests.

## Acknowledgements

Thank you to the teams behind React and BTCPay Server for providing the essential tools and frameworks used in this project.

## License

This project is open-source and available under the MIT License.