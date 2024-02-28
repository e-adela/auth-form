# auth-form

a login/signup react component form, integrated with formik & yup for client-side authentication.

## Setup

```
npm i auth-form-react
```

## How to use

```javascript
import React from "react";
import Form from "auth-form-react";

function App(props) {
  const onLogin = (values) => {
    // dispatch form values to an API
  };
  const onRegister = (values) => {
    // dispatch form values to an API
  };
  return <Form onSignIn={onLogin} onSignUp={onRegister} loading={false} />;
}

// serverError is a string to be shown if there is an error on the server.
// loading is a boolean for waiing for the fetch request.

export default App;
```
