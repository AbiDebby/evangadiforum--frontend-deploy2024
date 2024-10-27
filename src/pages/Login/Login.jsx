import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import About from '../../components/About/About';
import LayOut from '../../components/LayOut/LayOut';
import './login.css';

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      // alert("please provide all required fields !");
      setError('please provide all required fields !');
      return;
    }

    try {
      const { data } = await axios.post('/users/login', {
        email: emailValue,
        password: passValue,
      });
      // alert("logged in successfully");

      localStorage.setItem('token', data.token);
      navigate('/');
      // console.log(data);
      setSuccess('logged in successfully');
    } catch (error) {
      // alert(error?.response?.data?.msg);
      console.log(error.message);
      setError('Invalid credential');
    }
  };

  return (
    <LayOut>
      <div className="bg">
        <section className="both">
          <section className="login">
            <div className="login_container">
              <h2>Login to your account</h2>
              {error && (
                <p
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    marginBottom: '13px',
                  }}
                >
                  {error}
                </p>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '15px',
                }}
              >
                <span>Don't Have an Account?</span>
                <Link to="/register" style={{ marginTop: '0px' }}>
                  Create a new account
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <span>email or username</span>
                  <input ref={emailDom} type="text" placeholder="email" />
                </div>
                <br />
                <div>
                  <span>Password </span>
                  <input
                    ref={passwordDom}
                    type="password"
                    placeholder="password"
                  />
                </div>
                <br />
                <button className="btn" type="submit">
                  Login
                </button>
              </form>
              <Link to={'/register'}>Create an account</Link>
            </div>
          </section>
          <About />
        </section>
      </div>
    </LayOut>
  );
};

export default Login;
