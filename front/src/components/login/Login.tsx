import { Form, Button, Container } from 'react-bootstrap';

export const Login = () => {
	return (
		<div className='my-5 row'>
			<form className='col-6 mx-auto '>
				<div className='form-group'>
					<label htmlFor='email'>Email address</label>
					<input
						type='email'
						className='form-control'
						id='email'
						placeholder='Enter email'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						className='form-control'
						id='password'
						placeholder='Password'
					/>
				</div>
				<button type='submit' className='btn btn-primary mb-2 mt-3'>
					Sign in
				</button>
				<hr />
				<button type='button' className='btn btn-outline-primary btn-block'>
					Sign in with Google
				</button>
			</form>
		</div>
	);
};
