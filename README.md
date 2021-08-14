# auth-form

a login/signup react component form, integrated with formik & yup for client-side authentication.

## Setup

```
npm i @bit/emadadel999.mycollection.auth-form
```

## Demo

https://bit.dev/emadadel999/mycollection/auth-form

## How to use

```javascript
import React from "react";
import AuthForm from "@bit/emadadel999.mycomponents.auth-form";

function App(props) {
  const onLogin = (values) => {
    // dispatch form values to an API
  };
  const onRegister = (values) => {
    // dispatch form values to an API
  };
  return <AuthForm onSignIn={onLogin} onSignUp={onRegister} loading={false} />;
}

// serverError is a string to be shown if there is an error on the server.
// loading is a boolean for waiing for the fetch request.

export default App;
```
