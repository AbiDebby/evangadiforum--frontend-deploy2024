// src/pages/QuestionPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosConfig';
import LayOut from '../../components/LayOut/LayOut';
import Loading from '../../components/Loading/Loading';
import PostAnswer from '../../components/PostAnswer/PostAnswer'; // Import PostAnswer component
import SingleQuestion from '../../components/SingleQuestion/SingleQuestion';
import classes from './Question.module.css';

function QuestionPage() {
  const { id } = useParams(); // Get the question ID from the URL
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]); // State to store answers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`/questions/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestion(data.question[0]); // Assuming the question is returned as an array
        setLoading(false);
      } catch (err) {
        console.error('Error fetching question:', err.response || err.message);
        setError('Failed to load question.');
        setLoading(false);
      }
    };

    const fetchAnswers = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`/answers/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAnswers(data.answers); // Set fetched answers
      } catch (err) {
        console.error('Error fetching answers:', err);
        setError('');
      }
    };

    fetchQuestion();
    fetchAnswers();
  }, [id]);

  const refreshAnswers = () => {
    // Refresh answers after posting a new one
    const fetchAnswers = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`/answers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnswers(data.answers);
    };
    fetchAnswers();
  };

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <LayOut>
      <section>
        {question && <SingleQuestion question={question} />}
        {/* Add PostAnswer component */}
        <div className={classes.container}>
          <div className={classes.scrollableContainer}>
            {' '}
            {/* Scrollable container */}
            {answers.length > 0 ? (
              answers.map((answer, index) => (
                <div
                  key={answer.answer_id}
                  className={classes.answer__container}
                >
                  <div className={classes.profile}>
                    {/* Circle background for the SVG */}
                    <div className={classes.circle__background}>
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                      </svg>
                    </div>
                    <p>{answer.username}</p> {/* Username below the SVG */}
                  </div>
                  <p className={classes.answer__text}>{answer.answer}</p>{' '}
                  {/* Answer content */}
                  {index < answers.length - 1 && (
                    <hr className={classes.answerDivider} />
                  )}{' '}
                  {/* Horizontal line divider */}
                </div>
              ))
            ) : (
              <h3>Enter The First Answer:(</h3>
            )}
          </div>
        </div>
        <PostAnswer onAnswerPosted={refreshAnswers} />
      </section>
    </LayOut>
  );
}

export default QuestionPage;
