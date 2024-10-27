import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import About from '../../components/About/About';
import LayOut from '../../components/LayOut/LayOut';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    // const usernameValue=e.target.value
    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !emailValue ||
      !passValue
    ) {
      // alert("please provide all required fields !");
      setError('please provide all required fields !');
      return;
    }

    try {
      await axios.post('/users/register', {
        username: usernameValue,
        first_name: firstValue,
        last_name: lastValue,
        email: emailValue,
        password: passValue,
      });
      
      setSuccess('Register successfully. Please login');
      navigate('/login'); // Redirect to login page after registration

    } catch (error) {
      setError('Something went wrong!');
    }
  };

  return (
    <LayOut>
      <div className="bg">
        <section className="both">
          <section className="register">
            <div className="register_container">
              <h2>Join the network</h2>
              {success && (
                <p
                  style={{
                    textAlign: 'center',
                    color: 'green',
                    marginBottom: '13px',
                  }}
                >
                  {success}
                </p>
              )}
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
                <span>Already have an account?</span>
                <Link to="/login" style={{ marginTop: '0px' }}>
                  sign in
                </Link>
              </div>
              <form onSubmit={handleSubmit} className="registration__form">
                <div>
                  <span>username </span>
                  <input
                    ref={usernameDom}
                    type="text"
                    placeholder="user name"
                  />
                </div>
                <br />
                <div className="register_first_last">
                  <div>
                    <span>First name </span>
                    <input
                      ref={firstnameDom}
                      type="text"
                      placeholder="first name"
                    />
                  </div>

                  <div>
                    <span>Last name </span>
                    <input
                      ref={lastnameDom}
                      type="text"
                      placeholder="last name"
                    />
                  </div>
                </div>

                <div>
                  <span>email </span>
                  <input ref={emailDom} type="email" placeholder="email" />
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
                  Register
                </button>
              </form>
              <Link to="/login">Already have an account</Link>
            </div>
          </section>
          <About />
        </section>
      </div>
    </LayOut>
  );
};

export default Register;
