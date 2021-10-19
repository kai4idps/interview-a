import useForm from "./hooks/useForm";
import "./Form.css";

export default function Form() {
	const { handleChange, handleSubmit, values, errors } = useForm({
		initialValues: { account: "", password: "", rememberMe: false },
		validation: values => {
			const errors = {};
			if (!values.account) {
				errors.account = "請輸入帳號";
			}
			if (!values.password) {
				errors.password = "請輸入密碼";
			}
			return errors;
		},
		onSubmit: values => console.table(values)
	});

	return (
		<div className="flex">
			<div className="inputField">
				<input
					name="account"
					onChange={handleChange}
					value={values.account}
					placeholder="Account"
					className={errors.account ? "invalid" : "valid"}
				/>
				{errors.account && <div>{errors.account}</div>}
			</div>
			<div className="inputField">
				<input
					name="password"
					onChange={handleChange}
					value={values.password}
					placeholder="password"
					className={errors.password ? "invalid" : "valid"}
				/>
				{errors.password && <div>{errors.password}</div>}
			</div>
			<label>
				<input
					type="checkbox"
					name="rememberMe"
					className="checkbox"
					onChange={handleChange}
					checked={values.rememberMe}
				/>
				Remember Me
			</label>
			<button className="button" onClick={handleSubmit}>
				Login
			</button>
		</div>
	);
}
