# Enterwell's React form validation
In every our project, we encountered forms whose data needs to be validated at some point. We were aware of `formik` and other form validation packages, but we needed something simple and straight to the point. Thats how we came up with this package. We
really couldn't think of simpler way to validation form. Before making npm package out of it, we used it in several our projects and it proved to work very well. 

Hope it will help you as much as it helped us! 


## Installation

Package can be installed with one of the following commands (depending on whether you prefer `npm` or `yarn`)

```
$ npm install @enterwell/react-form-validation
```
```
$ yarn add @enterwell/react-form-validation
```


## Usage

Here is a quick example of how can this package be used in your `React` project.

```jsx
import React from 'react';
import { useValidation, isNonEmptyString, isPositiveNumber, submitForm } from '@enterwell/react-form-validation';

function UserForm(props) {
    const {
        name,
        age,
        onSubmit
    } = props;

    const userFormData = {
       name: useValidation(name, isNonEmptyString),
       age: useValidation(age || 0, isPositiveNumber)
    };

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={() => submitForm(userFormData, onSubmit)}>
            <input 
                /* 
                    Although cleaner, this approach will give you 'Warning: Invalid
                    values for props `validate`, `reset` on <input> tag.' which looks
                    really ugly if you open DevTools.
                */
                {...userFormData.name}
            /> 
            <input
                type="number"
                value={userFormData.age.value}
                onChange={userFormData.age.onChange}
            />
            <button type="submit">Save</button>
        </form>
    );
}
```


## API
### <u>useValidation</u>

Hook that keeps on form field's data.

* **params**
    * _**value**: any_ - Initial field's value
    * _**validationFn**: (any) => boolean_ - Function for validating the field's value
    * _**config**: Object_ - Additional hook configuration
        * _**receiveEvent**: boolean (default - `true`)_ - Flag inidicating whether `onChange` callback will receive whole event or just target's value
        * _**reversed**: boolean (default - `false`)_ - Flag indicating whether reversed error logic should be applied (error being `false` when present, instead of `true`)
        * _**ignoreDirtiness**: boolean (default - `false`)_ - Flag indicating whether field's dirtiness should be ignored (by default, field is validate on blur, but only if field is dirty ie. if its value has been changed)

* **returns**: _Object_ - Object with field's data and callbacks
    * _**value**: any_ - Current field's value
    * _**error**: boolean_ - Is error present flag (`true` if value was validated and didn't pass validation, `false` otherwise)
    * _**onChange**: (any) => void_ - `onChange` callback (change's the value and validates it if previous value wasn't correct)
    * _**onBlur**: () => void_ - `onBlur` callback (validates the value)
    * _**validate**: (any) => boolean_ - Function for validating field's value 
    * _**reset**: () => void_ - Function for resetting field's data

Usage example: 

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

### <u>extractValues</u>

Util function for extracting values from fields' data objects.

* **params**
    * _**fields**: Object_ - Form field's data
        * _**value**: any_ - Field's value

* **returns**: _Object_ - Object with fields' names as keys, and their values as values

Usage example:

```jsx
import { ..., extractValues } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const data = extractValues(userFormData);
console.log(data) // {name: "Matej", age: 10}
```

### <u>validateFields</u>

Util function for validating values of all fields

* **params**
    * _**fields**: Object_ - Form field's data
        * _**value**: any_ - Field's value
        * _**validate**: (any) => boolean_ - Function for validating field's value 

* **returns**: _boolean_ - `false` if form data is correct, `true` otherwise

Usage example:

```jsx
import { ..., validateFields } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const hasError = validateFields(userFormData);
console.log(hasError) // false
```

### <u>resetFields</u>

Util function for resetting all fields' data.

* **params**
    * _**fields**: Object_ - Form field's data
        * _**reset**: () => void_ - Function for resetting field's data

Usage example:

```jsx
import { ..., resetFields } from '@enterwell/react-form-validation';

/* useValidation example's code... */

resetFields(userFormData);
```

### <u>submitForm</u>

Util function for handling the form submit. Form's fields are first validated. If all values are correct, they are extracted to data object and passed to `onSubmit` callback.

* **params**
    * _**fields**: Object_ - Form field's data
        * _**value**: any_ - Field's value
        * _**validate**: (any) => boolean_ - Function for validating field's value 

* **returns**: _Object_ - Object with fields' names as keys, and their values as values

Usage example:

```jsx
import { ..., submitForm } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const onSubmit = (data) => fetch("www.some-url.com/post", {
    method: 'POST',
    data: JSON.stringify(data)
});
submitForm(userFormData, onSubmit);
```

### <u>cancelForm </u>

Util function for handling the form cancel. Form's fields are reset and `onCancel` callback is called.

* **params**
    * _**fields**: Object_ - Form field's data
        * _**reset**: () => void_ - Function for resetting field's data

Usage example:

```jsx
import { ..., cancelForm } from '@enterwell/react-form-validation';

/* useValidation example's code... */

const onCancel = (data) => alert("Form has been reset");
cancelForm(userFormData, onCancel);
```

___

_Unless otherwise stated, each validation function will have the following **params** and **returns**._

* **params**
    * _**v**: any_ - Form field's value

* **returns**: _boolean_ - `true` if field's value is correct, `false` otherwise

### <u>noError</u>

No error validation. Value of the field with this validation function will always be correct.

### <u>areEqual</u>

Are values equal validation. Value of the field with this validation function will be correct if it is equal to some other value (e.g. some other field's value).

* **params**
    * _**v1**: any_ - Form field's value
    * _**v2**: any_ - Some other value

* **returns**: _boolean_ - `true` if field's value is correct, `false` otherwise

### <u>isTrue</u>

Is true validation. Value of the field with this validation function will be correct only if it is `true`.

### <u>isNotNull</u>

Is not null validation. Value of the field with this validation function will be correct only if it is not `null`.

### <u>isNonEmptyString</u>

Is non-empty string validation. Value of the field with this validation function will be correct if it is not an empty string.

### <u>isValidNumber</u>

Is valid number validation. Value of the field with this validation function will be correct if it represents the valid number (as number or as string).

### <u>isPositiveNumber</u>

Is positive number validation. Value of the field with this validation function will be correct if it is the positive number.

### <u>isNegativeNumber</u>

Is negative number validation. Value of the field with this validation function will be correct if it is the negative number.

### <u>isNonEmptyArray</u>

Is non-empty array  validation. Value of the field with this validation function will be correct if it is the non-empty array.


## Future plans

We noticed that there are few things which could be added to our package in order to make it more flexible and easy to use. Here is what you can expect in the future:

- additional config which will enable to change when value is validate (e.g. only in `onChange`, in `onBlur` but only if current value is not valid and so on)
- more validation functions