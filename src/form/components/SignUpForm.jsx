import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormInput from "./FormInput";

function SignUpForm({
  className,
  onSignUp,
  serverError,
  loading,
  validationSchema,
  initalValues,
}) {
  return (
    <Formik
      initialValues={
        initalValues || {
          username: "",
          email: "",
          password: "",
        }
      }
      validationSchema={
        validationSchema ||
        yup.object({
          username: yup
            .string()
            .max(15, "must be 15 characters or less")
            .required("required"),
          email: yup.string().email("invalid email address").required("required"),
          password: yup
            .string()
            .max(6, "must be 6 characters or less")
            .required("required"),
        })
      }
      onSubmit={(values) => {
        onSignUp(values);
      }}>
      {(formik) => (
        <Form className={className} onSubmit={formik.handleSubmit}>
          <p className='typography --h4'>Create Account</p>

          <FormInput
            id='signup-username'
            name='username'
            type='text'
            placeholder='Username'
            autoComplete='username'
          />
          <FormInput
            id='signup-email'
            name='email'
            type='email'
            placeholder='Email'
            autoComplete='username'
          />
          <FormInput
            id='signup-password'
            name='password'
            type='password'
            placeholder='Password'
            autoComplete='new-password'
          />

          {serverError && <div className='server-form-error'>{serverError}</div>}

          {!loading ? (
            <button
              className='button --secondary'
              type='submit'
              disabled={!formik.isValid}>
              Sign up
            </button>
          ) : (
            <button className='button --secondary' type='submit' disabled={true}>
              Loading...
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
