# React BTCPay Server Pay Button

## Overview

The React BTCPay Server Pay Button is a highly customizable and easy-to-integrate component that allows you to add a BTCPay Server Pay Button to your React application. With just a few lines of code, you can enable Bitcoin payments right within your React app.

## Features

- **Easy Setup**: Just 3 easy steps to add the button to your React app.
- **Highly Customizable**: Modify the button text, currency, and more.
- **Secure**: All transactions are processed through your BTCPay Server.

## Installation

### Manual Installation

1. Download the `ReactBtcPayButton.jsx` and `ReactBtcPayButton.css` files from this repository.
2. Place them in a folder within your React project, e.g., `src/components/BTCPayButton/`.

## Quick Start

Here's how you can add the React BTCPay Server Pay Button to your application:

### Step 1: Import the Component

```jsx
import { ReactBtcPayButton } from './path/to/your/components/BTCPayButton/ReactBtcPayButton';
```

### Step 2: Add Component to Your App

To integrate the React BTCPay Button into your application, simply include it in your JSX as shown below (with optional settings):

```jsx
<ReactBtcPayButton
  currency='SATS' // Default currency
  defaultPaymentMethod='SATS' // Payment Method
  checkoutDesc='Your Description Here' // Checkout Description
  orderId='Your Order ID' // Order ID
  serverIpn='https://your-server-ipn.com' // Server IPN
  notifyEmail='your-email@example.com' // Notifications Email Address
  browserRedirect='https://your-redirect.com' // Browser Redirect URL
  submitBtnText='Request Invoice' // Submit Button Text
/>
```

### Step 3: Customize Settings and Design

To tailor the React BTCPay Server Pay Button to your specific needs, you'll need to adjust some user settings. Open the `ReactBtcPayButton.jsx` file and modify the following:

- `BTCPAY_DOMAIN`: Set this to your own BTCPay Server domain.
- `storeId`: Replace this with your BTCPay Server store ID.
- `CURRENCY_OPTIONS`: If you wish to accept payments in currencies other than SATS, add them to this array with commas (SATS, BTC, USD, EUR, etc.).
- Edit `ReactBtcPayButton.css` as needed.

## Requirements

- **Your Own BTCPay Server**: You must have access to a BTCPay Server, either self-hosted or through a third-party in order to handle payments.
- **React Application**: This component is intended to be used within an existing React application.

## Documentation

For more detailed information and advanced customization options, please refer to the [BTCPay Server Documentation](https://docs.btcpayserver.org/) and [React Documentation](https://legacy.reactjs.org/docs/getting-started.html).

## Contributing

Feel free to report issues, suggest features, and submit pull requests.

## Acknowledgements

Thank you to the teams behind React and BTCPay Server for providing the essential tools and frameworks used in this project.

## License

This project is open-source and available under the MIT License.

---

You're all set! You can now accept Bitcoin payments directly in your React application. 🚀
