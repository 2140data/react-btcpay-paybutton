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

### RECOMMENDED: Package Installation

1. **Install the Package**: Open your Terminal or other command line interface and run the following command to install the `react-btcpay-paybutton` package into your React project.
    ```command-line
    npm install react-btcpay-paybutton
    ```
2. **Proceed to Next Step**: Once the package is installed, move on to [Import the Component](#step-1-import-the-component) to integrate the `ReactBtcPayButton` into your app.

---

### *Optional: Manual Installation*

1. **Download the File**: Download and copy the `ReactBtcPayButton.jsx` file into your React app folder.
2. **Import the Component**: Use the following import statement in your React file where you want to use the component (be sure to use the correct `path/to/ReactBtcPayButton.jsx`):
    ```jsx
    import { ReactBtcPayButton } from 'path/to/ReactBtcPayButton.jsx';
    ```
3. **Proceed to Next Step**: After importing, you can move on to [Add Component to Your App](#step-2-add-component-to-your-app).

---

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

#### REQUIRED Props

| Prop          | Type     | Description                                       | Default Value | Available Options |
|---------------|----------|---------------------------------------------------|---------------|-------------------|
| `btcPayDomain`| `string` | :red_circle: **REQUIRED** The domain where your BTCPay Server is hosted. | `''`  | Add a URL         |
| `storeId`     | `string` | :red_circle: **REQUIRED** The ID of your store on the BTCPay Server.    | `''`  | Add a URL         |

#### OPTIONAL Additional Props

| Prop                  | Type     | Description                                       | Default Value       | Available Options         |
|-----------------------|----------|---------------------------------------------------|---------------------|---------------------------|
| `browserRedirect`     | `string` | The URL for browser redirection after payment.     | `''`               | Add a URL                 |
| `checkoutDesc`        | `string` | Description that appears on the checkout invoice.  | `''`               | Add a description         |
| `currency`            | `string` | Specifies the default currency for payments. [MORE INFO](#details-currency)      | `'SATS'`            | `'SATS', 'BTC'` |
| `currencyOptions`     | `array of strings`  | Defines the set of currencies in the currency switcher dropdown. [MORE INFO](#details-currency-options)  | `['SATS', 'BTC']`          | `['SATS', 'BTC', 'USD', 'EUR', 'CAD', 'AUD']` |
| `defaultPaymentMethod`| `string` | Specifies the payment method that will be used to process transactions. [MORE INFO](#details-default-payment-method)  | `''`            | `'', 'BTC_LightningLike', 'BTC'`           |
| `imageShow`           | `boolean`| Choose to show or hide the BTCPay logo on button.          | `true`             | `true`, `false`           |
| `imageSize`           | `string` | Specifies the height for the BTCPay logo on button.        | `'46px'`            | Enter any CSS size (px, % or rem)  |
| `inputMax`            | `number` | Specifies the maximum amount for the input field. | `21000000000000`    | Enter a number            |
| `inputMin`            | `number` | Specifies the minimum amount for the input field. | `1`                 | Enter a number            |
| `mode`                | `string` | Select a display mode for the BTCPay Pay Button fields. [MORE INFO](#details-mode)              | `'Slider'`          | `'Fixed', 'Slider', 'Custom'` |
| `notifyEmail`         | `string` | The email address for transaction notifications.  | `''`                | Add an email address      |
| `orderId`             | `string` | An identifier for the order.                      | `''`                | Add an order number       |
| `serverIpn`           | `string` | The URL for Instant Payment Notifications (IPN).  | `''`                | Add a URL                 |
| `sliderMax`           | `number` | Specifies the maximum value for the payment slider.| `250000`           | Enter a number            |
| `sliderMin`           | `number` | Specifies the minimum value for the payment slider.| `1`                | Enter a number            |
| `submitBtnText`       | `string` | The text displayed on the submit button.          | `'Pay with'`        | Add text                  |

#### OPTIONAL Style Props

| Prop                    | Type     | Description                                       | Default Value       | Available Options         |
|-------------------------|----------|---------------------------------------------------|---------------------|---------------------------|
| `amountInputStyles`     | `object` | Override input field styles.                      | [LISTED BELOW](#details-advanced-usage-example)                | Any CSS<br/>(JS Object)              |
| `formStyles`            | `object` | Override form styles.                             | [LISTED BELOW](#details-advanced-usage-example)                | Any CSS<br/>(JS Object)              |
| `plusMinusButtonStyles` | `object` | Override plus/minus button styles.                | [LISTED BELOW](#details-advanced-usage-example)                | Any CSS<br/>(JS Object)              |
| `rangeInputStyles`      | `object` | Override slider styles.                           | [LISTED BELOW](#details-advanced-usage-example)                | Any CSS<br/>(JS Object)              |
| `submitButtonStyles`    | `object` | Override button styles.                           | [LISTED BELOW](#details-advanced-usage-example)                | Any CSS<br/>(JS Object)              |
| `submitButtonTextStyles`| `object` | Override button text styles.                      | [LISTED BELOW](#details-advanced-usage-example)                | Any CSS<br/>(JS Object)              |

  
## How to Use ReactBtcPayButton Props

### REQUIRED Props

#### `btcPayDomain` (Required)
- **Type**: `String`
- **Required**: Yes
- **Description**: **REQUIRED**. This is the domain where your BTCPay Server is hosted. This is essential for initiating the payment process.
- **Default**: None. You **MUST** specify a URL.

#### `storeId` (Required)
- **Type**: `String`
- **Required**: Yes
- **Description**: **REQUIRED**. This is the unique identifier for your store on BTCPay Server. Essential for linking the payment button to your store.
- **Default**: None. You **MUST** specify a Store ID.

---

### OPTIONAL Additional Props

#### `browserRedirect`
- **Type**: `String` (URL)
- **Required**: No (Optional)
- **Description**: Specifies the URL to redirect the user's browser to after completing or cancelling the payment. This is useful for post-payment actions or tracking.
- **Default**: None. You have the option to specify a URL.

#### `checkoutDesc`
- **Type**: `String`
- **Required**: No (Optional)
- **Description**: This is the description that will appear on the checkout invoice. It provides additional information about the transaction to the user.
- **Default**: None. You can add a custom message or description.

<a id="details-currency"></a>

#### `currency`
- **Type**: `String`
- **Use With**: `currencyOptions`
- **Required**: No (Optional)
- **Description**: Determines the default currency used for payments. This is the currency in which the payment amount will be displayed.
- **Default**: 'SATS'. 'BTC' can be toggled instead to denominate in Bitcoin.

<a id="details-currency-options"></a>

#### `currencyOptions`
- **Type**: `Array of Strings`
- **Use With**: `currency`
- **Required**: No (Optional)
- **Description**: Defines the list of currencies that will be available in the dropdown for the user to select. This should be used in conjunction with the `currency` prop.
- **Default**: `['SATS', 'BTC', 'USD', 'EUR', 'CAD', 'AUD']`. More currencies will be supported soon!

:warning: **IMPORTANT** :warning:  
If you add new currencies, you must set a 'Preferred Price Source' in BTCPay Server under Store Settings > Rates. [See the BTCPay documentation](https://docs.btcpayserver.org/FAQ/Stores/#how-to-change-the-exchange-rate-provider-for-invoices)

<a id="details-default-payment-method"></a>

#### `defaultPaymentMethod`
- **Type**: `String`
- **Required**: No (Optional)
- **Description**: 
  - Specifies the payment method that will be used to process transactions (Store Default, On-Chain or Off-Chain).
  - The `defaultPaymentMethod` prop offers three distinct payment options for the transaction:
    1. `''`: Leave it empty to use the Store Default (Set in BTCPay Server Settings).
    2. `'BTC_LightningLike'`: For Off-chain transactions (Lightning).
    3. `'BTC'`: For On-chain transactions (Bitcoin).
- **Default Value**: `''`
- **Available Options**: `''`, `'BTC_LightningLike'`, `'BTC'`

#### `imageShow`
- **Type**: `Boolean`
- **Required**: No (Optional)
- **Description**: Allows you to choose whether to display the BTCPay Server logo on the payment button or not.
- **Default**: True. You can set it to `false` to hide the logo.

#### `imageSize`
- **Type**: `String`
- **Required**: No (Optional)
- **Description**: Sets the height dimension for the BTCPay Server logo that appears on the button. This allows for customization of the logo size.
- **Default**: '46px'. You can set it to any valid CSS size. Common BTCPay logo sizes are '40px', '46px', '57px'.

#### `inputMax`
- **Type**: `Number`
- **Required**: No (Optional)
- **Description**: Specifies the upper limit for the amount that can be entered in the payment input field. This sets a maximum cap for transactions.
- **Default**: 21000000000000. This value should be consistent with the selected `currency`.

#### `inputMin`
- **Type**: `Number`
- **Required**: No (Optional)
- **Description**: Specifies the lower limit for the amount that can be entered in the payment input field. This sets a minimum threshold for transactions.
- **Default**: `1`. This value should be consistent with the selected `currency`.

<a id="details-mode"></a>

#### `mode`
- **Type**: `String`
- **Required**: No (Optional)
- **Description**: 
  - Determines the display mode of the payment form on the user interface.
  - The `mode` prop offers three distinct layout options for the form:
    1. `'Slider'`: Features a range slider and an input field that allows the user to select the payment amount.
    2. `'Fixed'`: Presents a fixed payment amount that is not alterable by the user. Ideal for store items with a set price.
    3. `'Custom'`: Provides an input field for the user to manually enter the payment amount. Includes +/- buttons for easy adjustments.
- **Default Value**: `'Slider'`
- **Available Options**: `'Slider'`, `'Fixed'`, `'Custom'`

#### `notifyEmail`
- **Type**: `String` (Email)
- **Required**: No (Optional)
- **Description**: Specifies the email address where notifications related to the transaction will be sent. Useful for tracking payment statuses.
- **Default**: None. You have the option to specify an email address.

#### `orderId`
- **Type**: `String`
- **Required**: No (Optional)
- **Description**: Provides an identifier for the order, which can be useful for tracking and record-keeping.
- **Default**: None. You can optionally add an Order ID to the invoice for better tracking.

#### `serverIpn`
- **Type**: `String` (URL)
- **Required**: No (Optional)
- **Description**: Specifies the URL where Instant Payment Notifications (IPN) will be sent. This is useful for backend processing of payments.
- **Default**: None. You have the option to specify a URL for IPN.

#### `sliderMax`
- **Type**: `Number`
- **Required**: No (Optional)
- **Description**: Specifies the upper limit for the range slider used for selecting the payment amount.
- **Default**: `250000`. This value should be consistent with the selected `currency`.

#### `sliderMin`
- **Type**: `Number`
- **Required**: No (Optional)
- **Description**: Specifies the lower limit for the range slider used for selecting the payment amount.
- **Default**: `1`. This value should be consistent with the selected `currency`.

#### `submitBtnText`
- **Type**: `String`
- **Required**: No (Optional)
- **Description**: Sets the display text for the submit button on the payment form. Allows for customization to better match your branding or language.
- **Default**: 'Pay with'. You can change it to any text, but keep it short for better UI experience.

---

### OPTIONAL Style Props

#### `amountInputStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the amount input field. You can specify CSS properties in JavaScript object notation.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `formStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the form styles. You can specify CSS properties in JavaScript object notation.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `plusMinusButtonStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the plus and minus buttons. You can specify CSS properties in JavaScript object notation.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `rangeInputStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the range input (slider). You can specify CSS properties in JavaScript object notation.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `submitButtonStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the submit button. You can specify CSS properties in JavaScript object notation.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

#### `submitButtonTextStyles`
- **Type**: Object (CSS in JavaScript syntax)
- **Required**: No (Optional)
- **Description**: Allows you to customize the styles for the text within the submit button. You can specify CSS properties in JavaScript object notation.
- **Default**: *See all default styles below in the 'Advanced Usage' example.

---
<a id="details-advanced-usage-example"></a>

### Advanced Usage Example

Advanced Usage Example showing ALL available options:  
*Scroll down for all CSS styles (as JS objects)*

```jsx
<ReactBtcPayButton
  // === REQUIRED Props ===
  btcPayDomain='server.com' // REQUIRED - BTCPay Server domain
  storeId='storeid' // REQUIRED - BTCPay Server Store ID
  
  // === OPTIONAL Additional Props ===
  browserRedirect='https://redirect.com' // Browser redirect URL
  checkoutDesc='Thank you for your payment!' // Invoice description
  currency='SATS' // Default currency for invoices
  currencyOptions={['SATS', 'BTC', 'USD', 'EUR', 'CAD', 'AUD']} // Options for dropdown
  defaultPaymentMethod='' // How BTCPay Server will process transactions
  imageShow={true} // BTCPay logo in button? {true} or {false}
  imageSize='46px' // BTCPay Server logo height
  inputMax={21000000000000} // Input field maximum
  inputMin={1} // Input field minimum
  mode='Slider' // Form Options: 'Fixed', 'Custom', 'Slider'
  notifyEmail='email@youremail.com' // Notification email address
  orderId='0001' // Order ID
  serverIpn='serverIPN.com' // Server IPN
  sliderMax={250000} // Slider range maximum
  sliderMin={1} // Slider range minimum
  submitBtnText='Pay with' // Text on Button

  // === OPTIONAL Style Props ===
  
  // Default Input Field styles
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
  
  // Default Form styles
  formStyles={{
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  
  // Default Plus/Minus Button styles
  plusMinusButtonStyles={{
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
    justifyContent: 'center'
  }}
  
  // Default Range Slider styles
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
  
  // Default Select (Dropdown) styles
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
  
  // Default Submit Button styles
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
  
  // Default Submit Button Text styles
  submitButtonTextStyles={{
    color: '#fff',
    fontSize: '16px'
  }}
/>

```
  
## Documentation

For more information about BTCPay Server or React, please refer to the [BTCPay Server Documentation](https://docs.btcpayserver.org/) and [React Documentation](https://legacy.reactjs.org/docs/getting-started.html).

## Contributing

Feel free to report issues, suggest features, and submit pull requests. See [CONTRIBUTING.md](https://github.com/2140data/react-btcpay-paybutton/blob/main/CONTRIBUTING.md) for details.

## Acknowledgements

Thank you to the teams behind React and BTCPay Server for providing the essential tools and frameworks used in this project.

## License

This project is open-source and available under the MIT License.