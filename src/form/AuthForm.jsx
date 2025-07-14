import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './styles/main.scss';

const AuthForm = ({
	onSignUp,
	onSignIn,
	serverError,
	loading = false,
	validationSchema,
	initalValues,
}) => {
	const [signUpActive, setsignUp] = useState(false);

	const toggleSignPanel = () => {
		setsignUp((prevSignUp) => !prevSignUp);
	};

	return (
		<div className='wrapper'>
			<div className='container'>
				<div
					className={`form-container --signup ${
						!signUpActive ? '--signup-inactive' : ''
					}`}
				>
					<SignUpForm
						className={'form'}
						onSignUp={onSignUp}
						serverError={serverError}
						loading={loading}
						validationSchema={validationSchema}
						initalValues={initalValues}
					/>
				</div>
				<div
					className={`form-container --signin ${
						signUpActive ? '--signin-inactive' : ''
					}`}
				>
					<SignInForm
						className={'form'}
						onSignIn={onSignIn}
						serverError={serverError}
						loading={loading}
						validationSchema={validationSchema}
						initalValues={initalValues}
					/>
				</div>

				<div
					className={`overlay-container ${
						signUpActive ? '--signup-active' : ''
					}`}
				>
					<div className={`overlay ${signUpActive ? '--signup-active' : ''}`}>
						{signUpActive ? (
							<div className='overlay-panel --left --signup-active'>
								<p className='typography --h4 --white'>Register now!</p>
								<p className='typography --body --white'>
									Enter your personal details
								</p>
								<button
									className='button --transparent'
									onClick={toggleSignPanel}
								>
									Sign In
								</button>
							</div>
						) : (
							<div className='overlay-panel --right'>
								<p className='typography --h4 --white'>Welcome Back!</p>
								<p className='typography --body --white'>
									Please login with your personal info
								</p>
								<button
									className='button --transparent'
									onClick={toggleSignPanel}
								>
									Sign Up
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
