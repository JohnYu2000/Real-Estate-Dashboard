import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../hooks/useAuth.tsx';

function Signin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login, error, loading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = await login(email, password);
            console.log('Login successful:', data);
            navigate('/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
        }
    }

    return (
        <div className="text-center">
            <form className="form-signin" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign in'}
                </button>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        Error: {error.Message}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Signin;