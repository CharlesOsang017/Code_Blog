import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add authentication logic here
  };

  return (
    <div className='h-dvh flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded shadow-md w-full max-w-sm'
      >
        <h2 className='text-2xl font-semibold mb-6 text-center'>Login</h2>

        <label className='block mb-2 text-sm font-medium'>Email</label>
        <input
          type='email'
          className='w-full mb-4 px-3 py-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className='block mb-2 text-sm font-medium'>Password</label>
        <input
          type='password'
          className='w-full mb-6 px-3 py-2 border rounded'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button className='w-full'>Log In</Button>
        <small>
          Don\'t have an account? <Link to='/register'>Register</Link>
        </small>
      </form>
    </div>
  );
};

export default Login;
