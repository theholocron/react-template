import type { Credentials } from "../auth";
import "./login.css";

export interface LoginFormProps {
	onSubmit: (formData: Credentials) => void;
}

export function LoginForm(props: LoginFormProps) {
	const { onSubmit, ...rest } = props;

	return (
		<form
			className="login-form-container"
			onSubmit={(event) => {
				event.preventDefault();
				const elementsArray = Array.from(event.currentTarget.elements) as HTMLInputElement[];
				const formData = elementsArray.reduce((acc: Partial<Credentials>, elem: HTMLInputElement) => {
					if (elem.name) {
						acc[elem.name as keyof Credentials] = elem.value;
					}
					return acc;
				}, {} as Partial<Credentials>);

				// Ensure `formData` includes both `username` and `password` before calling `onSubmit`
				if (formData.username && formData.password) {
					onSubmit(formData as Credentials); // Type assertion to `Credentials`
				} else {
					console.error("Both username and password are required.");
				}
			}}
			{...rest}
		>
			<div className="login-form-wrapper">
				<div role="group" className="login-form-group">
					<label htmlFor="email" id="email-label" className="login-form-label">
						Email address
					</label>
					<input
						name="username"
						type="email"
						id="username"
						autoComplete="email"
						required
						aria-required="true"
						className="login-form-input"
					/>
				</div>
			</div>
			<div role="group" className="login-form-group">
				<label id="password-label" htmlFor="password" className="login-form-label">
					Password
				</label>
				<input
					name="password"
					type="password"
					id="password"
					required
					aria-required="true"
					className="login-form-input"
				/>
			</div>
			<button type="submit" className="submit-button">
				Sign in
			</button>
		</form>
	);
}

export interface LoginProps {
	onLogIn: (credentials: Credentials) => void;
}

export function Login(props: LoginProps) {
	return (
		<div className="page lists-show">
			<div className="loginscreen">
				<div className="login-screen-container">
					<header className="loginscreen-header">
						<h1 className="loginscreen-heading">Taskbox</h1>
						<p className="loginscreen-text">Sign in to your account</p>
					</header>
					<LoginForm onSubmit={props.onLogIn} />
				</div>
			</div>
		</div>
	);
}
