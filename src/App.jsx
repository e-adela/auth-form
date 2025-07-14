import AuthForm from '~/AuthForm';
import * as yup from 'yup';

function App() {
	const onLogin = (values) => {
		// dispatch form values to an API here
		alert('Success!');
	};
	const onRegister = (values) => {
		// dispatch form values to an API here
		alert('Success!');
	};
	return (
		<AuthForm
			onSignIn={onLogin}
			onSignUp={onRegister}
			validationSchema={yup.object({
				username: yup
					.string()
					.max(15, 'Must be 15 characters or less')
					.required('Please provide a username'),
				email: yup
					.string()
					.email('Invalid email address')
					.required('Please provide an email'),
				password: yup
					.string()
					.max(9, 'Must be 9 characters or less')
					.required('Please provide a password'),
			})}
			initalValues={{
				username: '',
				email: '',
				password: '',
			}}
		/>
	);
}

export default App;
