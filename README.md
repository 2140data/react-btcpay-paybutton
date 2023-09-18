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

To integrate the React BTCPay Button into your application, simply include it in your JSX (with minimum required settings):

```jsx
<ReactBtcPayButton
  btcPayDomain="AddYourServer.com"
  storeId="AddYourStoreID"
  // Additional options as needed
/>

```

### Step 3: Customize Settings and Design

The `ReactBtcPayButton` component accepts various props that allow you to customize its behavior and appearance. Below are detailed explanations for each of these props:

| Prop                 | Type     | Description                                                                 | Default Value        | Available Options    |
|----------------------|----------|-----------------------------------------------------------------------------|----------------------|----------------------|
| `amountInputStyles`  | `object` | Override input field styles.                                                 | `{}`                 | N/A                  |
| `browserRedirect`    | `string` | The URL for browser redirection after payment.                               | `''`                 | N/A                  |
| `btcPayDomain`       | `string` | The domain where your BTCPay Server is hosted.                               | N/A                  | N/A                  |
| `checkoutDesc`       | `string` | Description that appears on the checkout invoice.                            | `''`                 | N/A                  |
| `currency`           | `string` | Specifies the default currency for payments.                                 | `'SATS'`             | `'SATS', 'BTC', 'USD'`|
| `currencyOptions`    | `array`  | Defines the set of currencies for the dropdown.                              | `['SATS']`           | N/A                  |
| `defaultPaymentMethod`| `string` | Specifies the initially selected payment method.                             | `'SATS'`             | `'SATS', 'BTC'`      |
| `formStyles`         | `object` | Override form styles.                                                        | `{}`                 | N/A                  |
| `imageSize`          | `string` | Specifies the height for the button image.                                   | `''`                 | N/A                  |
| `inputMax`           | `number` | Specifies the maximum amount for the input field.                            | `21000000000000`     | N/A                  |
| `inputMin`           | `number` | Specifies the minimum amount for the input field.                            | `1`                  | N/A                  |
| `mode`               | `string` | The display mode of the BTCPay form.                                         | `'Fixed'`            | `'Fixed', 'Slider', 'Custom'`  |
| `notifyEmail`        | `string` | The email address for transaction notifications.                             | `''`                 | N/A                  |
| `orderId`            | `string` | An identifier for the order.                                                 | `''`                 | N/A                  |
| `plusMinusButtonStyles`| `object`| Override plus/minus button styles.                                           | `{}`                 | N/A                  |
| `rangeInputStyles`   | `object` | Override slider styles.                                                      | `{}`                 | N/A                  |
| `serverIpn`          | `string` | The URL for Instant Payment Notifications (IPN).                             | `''`                 | N/A                  |
| `showImage`          | `boolean`| Choose to show or hide the button image.                                     | `false`              | `true`, `false`      |
| `sliderMax`          | `number` | Specifies the maximum value for the payment slider.                          | `250000`             | N/A                  |
| `sliderMin`          | `number` | Specifies the minimum value for the payment slider.                          | `1`                  | N/A                  |
| `storeId`            | `string` | The ID of your store on the BTCPay Server.                                   | N/A                  | N/A                  |
| `submitBtnText`      | `string` | The text displayed on the submit button.                                     | `'Pay with'`         | N/A                  |
| `submitButtonStyles` | `object` | Override button styles.                                                      | `{}`                 | N/A                  |
| `submitButtonTextStyles`| `object`| Override button text styles.                                                 | `{}`                 | N/A                  |

#### Props, Explained

- **`amountInputStyles`**:  
  Optional prop to override input field styles. Add comma-separated CSS (JavaScript syntax) to override default styles.

- **`browserRedirect`**:  
  The URL to which the browser will be redirected after the payment process is completed or cancelled.

- **`btcPayDomain`**:  
  The domain where your BTCPay Server is hosted. Replace this with your BTCPay Server domain. This is a required field.

- **`checkoutDesc`**:  
  The description that appears on the checkout invoice. You can use this field to describe the product or service you are offering.

- **`currency`**:  
  Specifies the default currency you would like to use for payments. The default value is `'SATS'`. This is a required field.

- **`currencyOptions`**:  
  An array that defines the set of currencies that you can add to the dropdown. For example, you can set it to `['BTC', 'USD']` to enable Bitcoin and U.S. Dollar as options. This is a required field.

- **`defaultPaymentMethod`**:  
  Specifies the payment method that should be pre-selected when the component loads. For example, setting this to `'SATS'` would make Lightning Network the initially selected payment method. This is a required field.

- **`formStyles`**:  
  Optional prop to override form styles. Add comma-separated CSS (JavaScript syntax) to override default styles.

- **`imageSize`**:  
  Specifies the height for the button image (BTCPay Server logo). Defaults: 40px, 46px, 57px

- **`inputMax`**:  
  Specifies the maximum amount that can be entered in the input field. This is a required field.

- **`inputMin`**:  
  Specifies the minimum amount that can be entered in the input field. This is a required field.

- **`mode`**:  
  The display mode of the BTCPay form. Select: 'Fixed', 'Custom', or 'Slider'. This is a required field.

- **`notifyEmail`**:  
  The email address where notifications about the transaction will be sent.

- **`orderId`**:  
  An identifier for the order. This can be useful for keeping track of transactions.

- **`plusMinusButtonStyles`**:  
  Optional prop to override plus/minus button styles. Add comma-separated CSS (JavaScript syntax) to override default styles.

- **`rangeInputStyles`**:  
  Optional prop to override slider styles. Add comma-separated CSS (JavaScript syntax) to override default styles.

- **`serverIpn`**:  
  The URL of the server where Instant Payment Notifications (IPN) will be sent. The server must be capable of handling POST requests.

- **`showImage`**:  
  Choose to show or hide the button image. Options: {true} or {false} This is a required field.

- **`sliderMax`**:  
  Specifies the maximum value for the payment slider. This is a required field.

- **`sliderMin`**:  
  Specifies the minimum value for the payment slider. This is a required field.

- **`storeId`**:  
  The ID of your store on the BTCPay Server. Replace this with your specific store ID. This is a required field.

- **`submitBtnText`**:  
  The text displayed on the submit button. For example, setting this prop to `'Pay Now'` would change the button text to 'Pay Now'. This is a required field.

- **`submitButtonStyles`**:  
  Optional prop to override button styles. Add comma-separated CSS (JavaScript syntax) to override default styles.

- **`submitButtonTextStyles`**:  
  Optional prop to override button text styles. Add comma-separated CSS (JavaScript syntax) to override default styles.

### Example: Advanced Usage

An advanced example with all available options:

```jsx
<ReactBtcPayButton
  amountInputStyles={{maxWidth: '100%'}}
  browserRedirect=''
  btcPayDomain='yourserver.com'
  checkoutDesc=''
  currency='SATS'
  currencyOptions={['SATS']}
  defaultPaymentMethod='SATS'
  formStyles={{flexDirection: 'column'}}
  imageSize=''
  inputMax={21000000000000}
  inputMin={1}
  mode='Fixed'
  notifyEmail=''
  orderId=''
  plusMinusButtonStyles={{cursor: 'pointer'}}
  rangeInputStyles={{maxWidth: '100%'}}
  serverIpn=''
  selectStyles={{fontSize: '11px'}}
  showImage={false}
  sliderMax={250000}
  sliderMin={1}
  storeId='yourstoreid'
  submitBtnText='Pay with'
  submitButtonStyles={{backgroundColor: '#0f3b21', borderRadius: '4px', minWidth: '168px'}}
  submitButtonTextStyles={{fontSize: '16px', fontFamily: 'sans-serif'}}
/>

```
  
## Documentation

For more detailed information and advanced customization options, please refer to the [BTCPay Server Documentation](https://docs.btcpayserver.org/) and [React Documentation](https://legacy.reactjs.org/docs/getting-started.html).

## Contributing

Feel free to report issues, suggest features, and submit pull requests. See [CONTRIBUTING.md](https://github.com/2140data/react-btcpay-paybutton/blob/main/CONTRIBUTING.md) for details.

## Acknowledgements

Thank you to the teams behind React and BTCPay Server for providing the essential tools and frameworks used in this project.

## License

This project is open-source and available under the MIT License.