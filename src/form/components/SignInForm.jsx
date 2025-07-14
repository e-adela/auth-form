import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormInput from './FormInput';

function SignInForm({
	className,
	onSignIn,
	serverError,
	loading,
	validationSchema,
	initalValues,
}) {
	return (
		<Formik
			initialValues={
				initalValues || {
					username: '',
					password: '',
				}
			}
			validationSchema={
				validationSchema ||
				yup.object({
					username: yup
						.string()
						.max(15, 'must be 15 characters or less')
						.required('required'),
					password: yup
						.string()
						.max(6, 'must be 6 characters or less')
						.required('required'),
				})
			}
			onSubmit={(values) => {
				onSignIn(values);
			}}
		>
			{(formik) => (
				<Form className={className} onSubmit={formik.handleSubmit}>
					<p className='typography --h4'>Sign in</p>

					<FormInput
						id='signin-username'
						name='username'
						type='text'
						placeholder='Username'
						autoComplete='username'
					/>
					<FormInput
						id='signin-password'
						name='password'
						type='password'
						placeholder='Password'
						autoComplete='current-password'
					/>
					{serverError && (
						<div className='server-form-error'>{serverError}</div>
					)}

					{!loading ? (
						<button
							className='button --secondary'
							type='submit'
							disabled={!formik.isValid}
						>
							Sign in
						</button>
					) : (
						<button
							className='button --secondary'
							type='submit'
							disabled={true}
						>
							Loading...
						</button>
					)}
				</Form>
			)}
		</Formik>
	);
}

export default SignInForm;
