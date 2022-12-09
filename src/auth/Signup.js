import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../redux/base_url';

export default function Login() {
  const navigate = useNavigate();
  const fldClass = 'block w-full px-4 py-2 mt-2 text-clrPrime bg-white border rounded-md focus:border-clrPrime focus:ring-clrPrime focus:outline-none focus:ring focus:ring-opacity-20';
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const res = await axios.post(`${BaseUrl}users`, {
      user: {
        name,
        email,
        password,
      },
    }).then((response) => response);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    localStorage.setItem('token', res.headers.authorization);
    navigate('/freelancers');
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-clrSec">
          GoFreelancers
          {' '}
          <span className="text-xl text-clrPrime">Sign up</span>
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
              <input
                type="text"
                className={`${fldClass}`}
                placeholder="enter your name"
                required
              />
            </label>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
              <input
                type="email"
                className={`${fldClass}`}
                placeholder="email@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
              <input
                type="password"
                className={`${fldClass}`}
                placeholder="enter password"
                required
              />
            </label>

          </div>
          <a
            href="/"
            className="text-xs text-lime-600 hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-clrPrime rounded-md hover:bg-lime-400 focus:outline-none focus:bg-clrPrime">
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Don&apos;t have an account?
          {' '}
          <a
            href="/"
            className="font-medium text-clrPrime hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
