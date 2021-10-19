import { useState } from "react";

const useForm = ({ initialValues, validation, onSubmit }) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});

	const handleChange = e => {
		if (e.target.type === "checkbox") {
			setValues({ ...values, [e.target.name]: !values.rememberMe });
		}
		setValues({ ...values, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: null });
	};

	const handleSubmit = () => {
		let validateFormValue = validation(values);
		setErrors(validateFormValue);
		if (JSON.stringify(validateFormValue) === "{}") {
			onSubmit(values);
		}
	};

	return { values, handleChange, errors, handleSubmit };
};
export default useForm;
