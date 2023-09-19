# React BTCPay Server Pay Button

## Overview

The React BTCPay Server Pay Button offers a seamless and highly configurable solution for integrating BTCPay Server functionality into your React application. Enable Bitcoin payment processing in your app with just three simple steps.

## Features

- **Easy Setup**: Just 3 easy steps to add the button to your React app.
- **Highly Customizable**: Modify button text, currency options, colors and more.
- **Private**: All transactions are processed through your BTCPay Server.

## Requirements

- **BTCPay Server**: You must have access to a BTCPay Server, either self-hosted or through a third-party.
- **React Application**: This component is intended to be used within an existing React application.

## Installation

1. Run `npm install react-btcpay-paybutton` to install the package into your React project.
2. Follow the steps below to add the `ReactBtcPayButton` component to your app.

## Quick Start

Here's how you can add the React BTCPay Server Pay Button to your application:

### Step 1: Import the Component

```jsx
import { ReactBtcPayButton } from 'react-btcpay-paybutton';
```

### Step 2: Add Component to Your App

To integrate the React BTCPay Button into your application, simply include it in your JSX (with minimum required settings):

```jsx
<ReactBtcPayButton
  btcPayDomain="YourServer.com" // Your BTCPay Server URL
  storeId="YourStoreID" // Your BTCPay Server Store ID
  // Additional options as needed (see Step 3 below)
/>

```

### Step 3: Customize Settings and Design

The `ReactBtcPayButton` component accepts various props that allow you to customize its behavior and appearance. Below are detailed explanations for each of these props:

#### General Props

| Prop                 | Type     | Description                                                                 | Default Value        | Available Options    |
|----------------------|----------|-----------------------------------------------------------------------------|----------------------|----------------------|
| `browserRedirect`    | `string` | The URL for browser redirection after payment.                               | `''`                | Add a URL            |
| `btcPayDomain`       | `string` | REQUIRED. The domain where your BTCPay Server is hosted.                     | `''`                | Add a URL            |
| `checkoutDesc`       | `string` | Description that appears on the checkout invoice.                            | `''`                | Add a description    |
| `currency`           | `string` | Specifies the default currency for payments.                                 | `'SATS'`            | `'SATS', 'BTC', 'USD', etc.`   |
| `currencyOptions`    | `array`  | Defines the set of currencies for the dropdown.                              | `['SATS']`          | `['SATS', 'BTC', 'USD', etc.]` |
| `defaultPaymentMethod`| `string` | Specifies the initially selected payment method.                             | `'SATS'`           | `'SATS', 'BTC'`      |
| `imageSize`          | `string` | Specifies the height for the button image.                                   | `''`                | `'40px', '46px', '57px'`   |
| `inputMax`           | `number` | Specifies the maximum amount for the input field.                            | `21000000000000`    | Enter a number       |
| `inputMin`           | `number` | Specifies the minimum amount for the input field.                            | `1`                 | Enter a number       |
| `mode`               | `string` | The display mode of the BTCPay form.                                         | `'Slider'`           | `'Fixed', 'Slider', 'Custom'`  |
| `notifyEmail`        | `string` | The email address for transaction notifications.                             | `''`                | Add an email address |
| `orderId`            | `string` | An identifier for the order.                                                 | `''`                | Add an order number  |
| `serverIpn`          | `string` | The URL for Instant Payment Notifications (IPN).                             | `''`                | Add a URL            |
| `showImage`          | `boolean`| Choose to show or hide the button image.                                     | `false`             | `true`, `false`      |
| `sliderMax`          | `number` | Specifies the maximum value for the payment slider.                          | `250000`            | Enter a number       |
| `sliderMin`          | `number` | Specifies the minimum value for the payment slider.                          | `1`                 | Enter a number       |
| `storeId`            | `string` | REQUIRED. The ID of your store on the BTCPay Server.                         | `''`                | Add a URL            |
| `submitBtnText`      | `string` | The text displayed on the submit button.                                     | `'Pay with'`        | Add text             |

#### Style Props

| Prop                 | Type     | Description                                                                 | Default Value        | Available Options    |
|----------------------|----------|-----------------------------------------------------------------------------|----------------------|----------------------|
| `amountInputStyles`  | `object` | Override input field styles. See default styles below.                  | `{}`                 | Listed below         |
| `formStyles`         | `object` | Override form styles. See default styles below.                         | `{}`                 | Listed below         |
| `plusMinusButtonStyles`| `object`| Override plus/minus button styles. See default styles below.           | `{}`                 | Listed below         |
| `rangeInputStyles`   | `object` | Override slider styles. See default styles below.                       | `{}`                 | Listed below         |
| `submitButtonStyles` | `object` | Override button styles. See default styles below.                       | `{}`                 | Listed below         |
| `submitButtonTextStyles`| `object`| Override button text styles. See default styles below.                | `{}`                 | Listed below         |

---
  
## How to Use ReactBtcPayButton Props

### General Props

#### `browserRedirect`
- **Type**: String (URL)
- **Required**: No (Optional)
- **Description**: Specifies the URL to which the user's browser will be redirected after the payment process is either completed or cancelled.
- **Default**: None. You can add a URL.

#### `btcPayDomain` (Required)
- **Type**: String
- **Required**: Yes
- **Description**: REQUIRED. The domain where your BTCPay Server is hosted.
- **Default**: None. You MUST add a URL.

#### `checkoutDesc`
- **Type**: String
- **Required**: No (Optional)
- **Description**: Sets the description that appears on the checkout invoice.
- **Default**: None. You can add a message to the invoice.

#### `currency`
- **Type**: String
- **Required**: No (Optional)
- **Description**: Sets the default currency for payments.
- **Default**: 'SATS'. Add currencies like 'BTC', 'USD', then include the additions in `currencyOptions`.

Note: If you change currency, you must provide your own currency conversion code!

#### `currencyOptions`
- **Type**: Array of Strings
- **Required**: No (Optional)
- **Description**: Defines the set of currencies that can be selected from the dropdown. Use with `currency` prop.
- **Default**: ['SATS']. You can add to the array: ['SATS, BTC, USD']

Note: If you change currency, you must provide your own currency conversion code!

#### `defaultPaymentMethod`
- **Type**: String
- **Required**: No (Optional)
- **Description**: Sets the payment method that will be used to process payments.
- **Default**: 'SATS'. You can select 'SATS' (OFF-CHAIN) or 'BTC' (ON-CHAIN)

#### `imageSize`
- **Type**: String
- **Required**: No (Optional)
- **Description**: Sets the height for the BTCPay Server logo.
- **Default**: '46px'. Can be any size. BTCPay logo defaults: '40px', '46px', '57px'

#### `inputMax`
- **Type**: Number
- **Required**: No (Optional)
- **Description**: Sets the maximum amount that can be entered in the input field.
- **Default**: '21000000000000'. Conforms to selected `currency`.

#### `inputMin`
- **Type**: Number
- **Required**: No (Optional)
- **Description**: Sets the minimum amount that can be entered in the input field.
- **Default**: '1'. Conforms to selected `currency`.

#### `mode`
- **Type**: String
- **Required**: No (Optional)
- **Description**: Sets the display mode of the form.
- **Default**: 'Slider'. Choose: 'Slider', 'Fixed', or 'Custom'.

#### `notifyEmail`
- **Type**: String (Email)
- **Required**: No (Optional)
- **Description**: The email address where transaction notifications will be sent.
- **Default**: None. You can add an email address here.

#### `orderId`
- **Type**: String
- **Required**: No (Optional)
- **Description**: An identifier for the order.
- **Default**: None. Add an Order ID to the invoice.

#### `serverIpn`
- **Type**: String (URL)
- **Required**: No (Optional)
- **Description**: The URL where Instant Payment Notifications (IPN) will be sent.
- **Default**: None. Add a URL for your IPN.

#### `showImage`
- **Type**: Boolean
- **Required**: No (Optional)
- **Description**: Choose to show or hide the BTCPay Server logo.

#### `sliderMax`
- **Type**: Number
- **Required**: No (Optional)
- **Description**: Sets the maximum value for the payment slider.
- **Default**: '250000'. Conforms to selected `currency`.

#### `sliderMin`
- **Type**: Number
- **Required**: No (Optional)
- **Description**: Sets the minimum value for the payment slider.
- **Default**: '1'. Conforms to selected `currency`.

#### `storeId` (Required)
- **Type**: String
- **Required**: Yes
- **Description**: REQUIRED. The ID of your store on BTCPay Server.
- **Default**: None. You MUST add a Store ID.

#### `submitBtnText`
- **Type**: String
- **Required**: No (Optional)
- **Description**: Sets the text for the submit button.
- **Default**: 'Pay with'. You can change to any text. Keep it short!

### Style Props

#### `amountInputStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the amount input field.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `formStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the form styles.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `plusMinusButtonStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the plus and minus buttons.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `rangeInputStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the range input (slider).
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `submitButtonStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the submit button.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `submitButtonTextStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the text within the submit button.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

---

### Example: Advanced Usage

Advanced Usage example showing all available options:

```jsx
<ReactBtcPayButton
  // === General Props ===
  browserRedirect='https://redirect.com' // Browser redirect URL
  btcPayDomain='server.com' // REQUIRED - BTCPay Server domain
  checkoutDesc='Thank you for your payment!' // Invoice description
  currency='SATS' // Default currency for invoices
  currencyOptions={['SATS', 'BTC']} // Currency options for dropdown
  defaultPaymentMethod='SATS' // Payment method to use: 'BTC' or 'SATS'
  imageSize='46px' // BTCPay Server logo height
  inputMax={21000000000000} // Input field maximum
  inputMin={1} // Input field minimum
  mode='Slider' // Form Options: 'Fixed', 'Custom', 'Slider'
  notifyEmail='email@youremail.com' // Notification email address
  orderId='0001' // Order ID
  serverIpn='serverIPN.com' // Server IPN
  showImage={true} // BTCPay logo in button? {true} or {false}
  sliderMax={250000} // Slider range maximum
  sliderMin={1} // Slider range minimum
  storeId='storeid' // REQUIRED - BTCPay Server Store ID
  submitBtnText='Pay with' // Text on Button

  // === Style Props ===
  
  // Override input field styles
  amountInputStyles={{
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
    width: '140px',
    maxWidth: '100%'
  }}
  
  // Override form styles
  formStyles={{
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  
  // Override plus/minus button styles
  plusMinusButtonStyles={{
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
    justifyContent: 'center'
  }}
  
  // Override slider styles
  rangeInputStyles={{
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    width: '100%',
    background: 'transparent',
    marginTop: '10px',
    marginBottom: 0,
    outline: 0
  }}
  
  // Override select styles
  selectStyles={{
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    color: 'currentColor',
    background: 'transparent',
    border: '1px solid',
    borderColor: 'transparent',
    display: 'block',
    padding: '1px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    fontSize: '11px',
    cursor: 'pointer'
  }}
  
  // Override submit button styles
  submitButtonStyles={{
    marginTop: '1rem',
    marginBottom: '2rem',
    minWidth: '168px',
    minHeight: '46px',
    borderRadius: '4px',
    backgroundColor: '#0f3b21',
    cursor: 'pointer',
    border: '2px solid transparent'
  }}
  
  // Override submit button text styles
  submitButtonTextStyles={{
    color: '#fff',
    fontSize: '16px'
  }}
/>

```
  
## Documentation

For more information and advanced customization options, please refer to the [BTCPay Server Documentation](https://docs.btcpayserver.org/) and [React Documentation](https://legacy.reactjs.org/docs/getting-started.html).

## Contributing

Feel free to report issues, suggest features, and submit pull requests. See [CONTRIBUTING.md](https://github.com/2140data/react-btcpay-paybutton/blob/main/CONTRIBUTING.md) for details.

## Acknowledgements

Thank you to the teams behind React and BTCPay Server for providing the essential tools and frameworks used in this project.

## License

This project is open-source and available under the MIT License.