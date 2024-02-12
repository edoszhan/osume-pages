"use client";

import { use, useState } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    //  TODO: Implement login logic here
    if (email === 'user@gmail.com' && password === 'password') {
      // Redirect to the dashboard or any other page after successful login
        router.push('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <button type="submit" style={{ backgroundColor: 'green', color: '#fff', padding: '10px 20px', fontSize: '16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
