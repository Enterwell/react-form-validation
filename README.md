<h1 align="center">Enterwell's React form validation</h1>

<p align="center">
    Keeps and validates your form's data. Doesn't mess with your components. Simple and straight to the point.
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@enterwell/react-form-validation)](https://www.npmjs.com/package/@enterwell/react-form-validation)
![Build](https://github.com/Enterwell/react-form-validation/workflows/Node.js%20Package/badge.svg?branch=master)

</div>

## Features

* Keeps form's state and validation results
* Supports any kind of validation functions
* Dirty checking
* Separates data from view
* Relies on hooks, but can easily be used with class components

## Installation

Package can be installed with one of the following commands (depending on whether you prefer `npm` or `yarn`)

```bash
npm install @enterwell/react-form-validation
```

```bash
yarn add @enterwell/react-form-validation
```

## Usage

2 quick steps to validate any kind of input.

![GIF](docs/email-input.gif?raw=1)

Step 1:

* Define validation function (or use some of predefined) and use it to initialize validation hook

```jsx
const emailValidation = (value) => /^.+@\S+\.\S+$/.test(value);
const email = useValidation('matej.radovix@enterwell.net', emailValidation);
```

Step 2:

* Pass the email data to your input

```jsx
<div>
    <input
        className={email.error ? 'error' : 'no-error'}
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
    >
    {email.error && (
        <span className="error-message">Incorrect email!</span>
    )}
</div>
```

And thats all!

## API

### `useValidation(initialValue, validationFn, config?)`

Hook that keeps on form field's data.

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| initialValue | _any_ | yes | Field's initial value |
| validationFn | _(any) => boolean or Promise&lt;boolean&gt;_ | yes | Function for validating the field's value |
| config | _{<br>&nbsp;&nbsp;&nbsp;receiveEvent: boolean,<br>&nbsp;&nbsp;&nbsp;reversed: boolean<br>&nbsp;&nbsp;&nbsp;ignoreDirtiness: boolean<br>}_ | no | Additional hook configuration.<br><br><ul><li>`receiveEvent` inidicates whether `onChange` callback will receive whole event or just target's value</li><li>`reversed` indicates whether reversed error logic should be applied (error being `false` when present, instead of `true`)</li><li>`ignoreDirtiness` indicating whether field's dirtiness should be ignored (by default, field is validate on blur, but only if field is dirty ie. if its value has been changed)</li></ul>|

#### Returns

| Type <div style="width: 200px"></div> | Description |
|---- | ----------- |
| _{<br>&nbsp;&nbsp;&nbsp;value: any,<br>&nbsp;&nbsp;&nbsp;error: boolean<br>&nbsp;&nbsp;&nbsp;onChange: (any, config) => void<br>&nbsp;&nbsp;&nbsp;onBlur: (event, config) => void<br>&nbsp;&nbsp;&nbsp;validate: (any, config) => boolean or Promise&lt;boolean&gt;<br>&nbsp;&nbsp;&nbsp;reset: () => void,<br>&nbsp;&nbsp;&nbsp;props: {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: any,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange: (any, config) => void<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onBlur: (event, config) => void<br>&nbsp;&nbsp;&nbsp;}<br>}_ | Object with field's data and callbacks.<br><br><ul><li>`value` - field's current value</li><li>`error` - is error present flag (`true` if value was validated and didn't pass validation, `false` otherwise)</li><li>`onChange` - callback for change event (change's the value and validates it if previous value wasn't correct)</li><li>`onBlur` - callback for blur event (validates the value)</li><li>`validate` - function for validating field's value</li><li>`reset` - function for resetting field's data</li><li>`props` - set of props that can be spread on standard input elements (same as props in root object, just grouped for better DX)</li></ul><br/>`onChange`, `onBlur` and `validate` functions accept config as last parameter - this will override config from `useValidation` if provided. |

#### Usage example

```jsx
import { useValidation, isNonEmptyString } from '@enterwell/react-form-validation';

/* Some code... */

const userFormData = {
    name: useValidation(name, isNonEmptyString),
    age: useValidation(age, () => true)
};
console.log(userFormData.name) // {value: "Matej", error: false, onChange: ƒ, onBlur: ƒ, validate: ƒ, reset: f}"

```

___

### `extractValues(fields)`

Util function for extracting values from fields' data objects.

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| fields | _{<br/>&nbsp;&nbsp;key: { value: any },<br/>&nbsp;&nbsp;...<br/>}_ | yes | Form field's data (each field must have `value` property - other properties are not important) |

#### Returns

| Type <div style="width: 200px"></div> | Description |
|---- | ----------- |
| _Object_ | Object with fields' names as keys, and their values as values |

#### Usage example

```jsx
import { ..., extractValues } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const data = extractValues(userFormData);
console.log(data) // {name: "Matej", age: 10}
```

### `validateFields(fields)`

Util function for validating values of all fields

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| fields | _{<br/>&nbsp;&nbsp;key: {<br>&nbsp;&nbsp;&nbsp;&nbsp;value: any<br>&nbsp;&nbsp;&nbsp;&nbsp;validate: (any) => boolean<br>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;...<br />]_ | yes | Form field's data (each field must have `value`  and `validate` properties - other properties are not important) |

#### Returns

| Type <div style="width: 200px"></div> | Description |
|---- | ----------- |
| _boolean_ or _Promise&lt;boolean&gt;_ | `false` if form data is correct, `true` otherwise. Promise with same result when at least one validation function resolved to Promise. |

#### Usage example

```jsx
import { ..., validateFields } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const hasError = validateFields(userFormData);
console.log(hasError) // false
```

### `resetFields(fields)`

Util function for resetting all fields' data.

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| fields | _{<br/>&nbsp;&nbsp;key: { reset: () => void },<br />&nbsp;&nbsp;...<br/>}_ | yes | Form field's data (each field must have `reset` property - other properties are not important) |

#### Usage example

```jsx
import { ..., resetFields } from '@enterwell/react-form-validation';

/* useValidation example's code... */

resetFields(userFormData);
```

### `submitForm(fields, onSubmit)`

Util function for handling the form submit. Form's fields are first validated. If all values are correct, they are extracted to data object and passed to `onSubmit` callback.

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| fields | _{<br/>&nbsp;&nbsp;key: {<br>&nbsp;&nbsp;&nbsp;&nbsp;value: any<br>&nbsp;&nbsp;&nbsp;&nbsp;validate: (any) => boolean<br>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;...<br/>}_ | yes | Form field's data (each field must have `value`  and `validate` properties - other properties are not important) |
| onSubmit | _(any) => void_ | yes | On submit callback |

#### Usage example

```jsx
import { ..., submitForm } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const onSubmit = (data) => fetch("www.some-url.com/post", {
    method: 'POST',
    data: JSON.stringify(data)
});
submitForm(userFormData, onSubmit);
```

### `cancelForm(fields, onCancel)`

Util function for handling the form cancel. Form's fields are reset and `onCancel` callback is called.

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| fields | _{<br/>&nbsp;&nbsp;key: { reset: () => void },<br/>&nbsp;&nbsp;...<br/>}_ | yes | Form field's data (each field must have `reset` property - other properties are not important) |
| onCancel | _(any) => void_ | yes | On cancel callback |

#### Usage example

```jsx
import { ..., cancelForm } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const onCancel = (data) => alert("Form has been reset");
cancelForm(userFormData, onCancel);
```

___

_Unless otherwise stated, each validation function will have the following #### Params and #### Returns._

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| value | _any_ | no | Form field's value |

#### Returns

| Type <div style="width: 200px"></div> | Description |
|---- | ----------- |
| _boolean_ | `true` if field's value is correct, `false` otherwise |

### `noError()`

No error validation. Value of the field with this validation function will always be correct.

### `areEqual(value, other)`

Are values equal validation. Value of the field with this validation function will be correct if it is equal to some other value (e.g. some other field's value).

#### Params

| Name | Type <div style="width: 200px"></div> | Required | Description |
| ---- | ---- | ---- | ----------- |
| value | _any_ | no | Form field's value |
| other | _any_ | no | Some other value |

#### Returns

| Type <div style="width: 200px"></div> | Description |
|---- | ----------- |
| _boolean_ | `true` if field's value is correct, `false` otherwise |

### `isTrue(value)`

Is true validation. Value of the field with this validation function will be correct only if it is `true`.

### `isNotNull(value)`

Is not null validation. Value of the field with this validation function will be correct only if it is not `null`.

### `isNonEmptyString(value)`

Is non-empty string validation. Value of the field with this validation function will be correct if it is not an empty string.

### `isValidNumber(value)`

Is valid number validation. Value of the field with this validation function will be correct if it represents the valid number (as number or as string).

### `isPositiveNumber(value)`

Is positive number validation. Value of the field with this validation function will be correct if it is the positive number.

### `isNegativeNumber(value)`

Is negative number validation. Value of the field with this validation function will be correct if it is the negative number.

### `isNonEmptyArray(value)`

Is non-empty array  validation. Value of the field with this validation function will be correct if it is the non-empty array.

## Future plans

We noticed that there are few things which could be added to our package in order to make it more flexible and easy to use. Here is what you can expect in the future:

* additional config which will enable to change when value is validate (e.g. only in `onChange`, in `onBlur` but only if current value is not valid and so on)
* more validation functions
