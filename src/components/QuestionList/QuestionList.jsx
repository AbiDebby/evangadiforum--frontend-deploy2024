import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './questionList.css';

function QuestionList({ question }) {
  const [hover, setHover] = useState(false);
  //   console.log(question);
  const { question_id: id, username, question: q } = question;
  //   console.log(hover);
  return (
    <>
      <Link
        to={`/questions/${id}`}
        className="question__link"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`d-flex justify-content-between align-items-center p-3  shadow-sm question rounded${
            hover ? ' question__hover' : ''
          }`}
        >
          <div className="text-center">
            <div>
              <div
                className={`transition icon__container d-flex justify-content-center align-items-center p-5${
                  hover ? ' question__avatar' : ''
                }`}
              >
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="5rem"
                    width="5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="fs-4">{username}</div>
          </div>
          <div className="flex-fill ms-5 fs-2">{q}</div>
          <div className={`transition${hover ? ' me-2' : ' me-5'}`}>
            <FaChevronRight size={40} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default QuestionList;
