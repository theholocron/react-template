import * as React from "react";
import "./login.css";

export interface LoginFormProps extends React.HTMLProps<HTMLFormElement> {
	onSubmit: (formData: { [key: string]: string }) => void;
}

export function LoginForm (props: LoginFormProps) {
	const {
		onSubmit,
		...rest
	} = props;

	return (
		<form
			className="login-form-container"
			onSubmit={(event) => {
				event.preventDefault();
				const elementsArray = Array.from(event.currentTarget.elements);
				const formData = elementsArray.reduce((acc: { [key: string]: string }, elem: object) => {
					if (elem.id) {
						acc[elem.id] = elem.value;
					}
					return acc;
				}, {});

				onSubmit(formData);
			}}
			{...rest}
		>
			<div className="login-form-wrapper">
				<div role="group" className="login-form-group">
					<label htmlFor="email" id="email-label" className="login-form-label">
						Email address
					</label>
					<input
						name="email"
						type="email"
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
	onLogIn: (formData: { [key: string]: string }) => void;
}

export function Login (props: LoginProps) {
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
