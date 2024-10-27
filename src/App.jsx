import 'bootstrap/dist/css/bootstrap.css';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from './axiosConfig';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import QuestionPage from './pages/Question/Question';
import Register from './pages/Register/Register';
// import AskQuestion from "./pages/AskQuestions/AskQuestion";
// import AnswerQuestion from "./pages/AnswerQuestion";
// import DashBoard from "./pages/DashBoard";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const publicRoutes = ['/login', '/register'];
    const currentPath = window.location.pathname;

    // Don't check authentication on public routes like login and register
    if (!publicRoutes.includes(currentPath)) {
      async function checkUser() {
        try {
          const { data } = await axios.get('/users/check', {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          });
          setUser(data);
        } catch (error) {
          console.log(error.response);
          navigate('/login');
        }
      }
      checkUser();
    }
  }, [navigate, token]);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        {/* <Route path="dashboard" element={<DashBoard />} /> */}
        {/* <Route path="ask-question" element={<AskQuestion />} />
        <Route path="/answer-q/:questionId" element={<AnswerQuestion />} />
        <Route path="dashboard" element={<DashBoard />} /> */}
      </Routes>
    </AppState.Provider>
  );
}

export default App;
