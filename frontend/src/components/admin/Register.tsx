import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", { username, email, password });
    // Add registration logic here
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleRegister}
        className='bg-white p-8 rounded shadow-md w-full max-w-sm'
      >
        <h2 className='text-2xl font-semibold mb-6 text-center'>Register</h2>

        <label className='block mb-2 text-sm font-medium'>Username</label>
        <input
          type='text'
          className='w-full mb-4 px-3 py-2 border rounded'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className='block mb-2 text-sm font-medium'>Email</label>
        <input
          type='email'
          className='w-full mb-4 px-3 py-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className='block mb-2 text-sm font-medium'>Password</label>
        <div className='relative mb-6 w-full'>
          <input
            type={showPassword ? "text" : "password"}
            className='w-full mb-6 px-3 py-2 border rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className='absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer text-gray-500'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>
        <Button className='w-full'>Register</Button>
        <small className="text-sm mt-20">
          Already have an account? <Link className="hover:underline text-blue-800" to='/login'>Login</Link>
        </small>
      </form>
    </div>
  );
};

export default Register;
