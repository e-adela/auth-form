import PropTypes from 'prop-types';
import { useField } from 'formik';

const FormInput = ({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={`form-control ${meta.touched && meta.error}`}>
			<div className='input-container'>
				<input className='input' {...field} {...props} />
			</div>
			{meta.touched && meta.error ? (
				<div className='form-error'>{meta.error}</div>
			) : null}
		</div>
	);
};

FormInput.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
	required: PropTypes.bool,
	pattern: PropTypes.string,
	placeholder: PropTypes.string,
};

export default FormInput;
