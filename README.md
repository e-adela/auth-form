# auth-form
a login/signup react component form, integrated with formik & yup for client-side authentication.

## Setup
```
npm i auth-form-react
```

## Live
check it live [here](https://auth-form.eabdelmaksoud.me)

## How to use
```javascript
import AuthForm from "auth-form-react";
import * as yup from "yup"; //if you wish to provide your own auth schema

function App() {
  const onLogin = (values) => {// dispatch form values to an API here};
  const onRegister = (values) => {// dispatch form values to an API here};
  return (
    <AuthForm
      onSignIn={onLogin}
      onSignUp={onRegister}
      validationSchema={yup.object({
        username: yup
          .string()
          .max(15, "Must be 15 characters or less")
          .required("Please provide a username"),
        email: yup
          .string()
          .email("Invalid email address")
          .required("Please provide an email"),
        password: yup
          .string()
          .max(9, "Must be 9 characters or less")
          .required("Please provide a password"),
      })}
      initalValues={{
        username: "",
        email: "",
        password: "",
      }}
    />
  );
}

export default App;
```
