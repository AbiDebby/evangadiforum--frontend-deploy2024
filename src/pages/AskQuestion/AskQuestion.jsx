

// import React, { useEffect, useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// // import Header from "../Header/Header";
// import axios from "../../axiosConfig";
// import { v4 as uuidv4 } from "uuid";
// import { AppState } from "../../App";
// import LayOut from "../../components/LayOut/LayOut";

// const AskQuestion = () => {
//   const navigate = useNavigate();

//   const { user } = useContext(AppState);
//   const token = localStorage.getItem("token");
//   // console.log(user)
//   const questionDom = useRef(null);
//   const descriptionDom = useRef(null);
//   const tagDom = useRef(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const questionValue = questionDom.current.value;
//     const descriptionValue = descriptionDom.current.value;
//     const tagValue = tagDom.current.value;
//     console.log(questionValue);
   

//     if (!questionValue ||!descriptionValue ||!tagValue
//     ) {
//       alert("please provide all required fields");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "/questions",
//         {
        
//           question: questionValue,
//           description: descriptionValue,
//           tag: tagValue,
//         },
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       questionDom.current.value = "";
//       descriptionDom.current.value = "";
//       tagDom.current.value = "";
//       console.log(response, "response");

//       setTimeout(() => {
//         navigate("/");
//         window.location.reload();
//       }, 2000);
      
//     } catch (error) {
//       alert("something went wrong");
//       console.log(error.response);
//     }
//   }

//   return (
//     <LayOut>
//       <section>
//         <div className="container d-flex flex-column align-items-center mt-4 ">
//           {/* steps and how to write Q  */}
//           <div className="justify-content-around ">
//             {/*  how to write Q  Title*/}
//             <h2>Steps to Write a good questions </h2>
//           </div>

//           <div>
//             {/*step to write Q  */}
//             <ul>
//               <li> Summarise you problem in one-line title</li>
//               <li> Describe your problem in more detail</li>
//               <li>Describe what you tried and What you expected to happen </li>
//               <li>Review your question and post it to the site </li>
//             </ul>
//           </div>
//         </div>

//         <div className="d-flex flex-column align-items-center container  shadow-sm p-3 mb-5 bg-body rounded">
//           <div className="mt-5 pt-4">
//             {/* Ask Q Part */}
//             <div>
//               <h3>Ask a Public question </h3>
//             </div>
//             <div className="align-items-center">
//               <p>Go to Question page</p>
//             </div>
//           </div>

//           <div className="container">
//             {/* form part */}
//             <form action="" onSubmit={handleSubmit}>
//               <div className="mb-2">
//                 <input
//                   type="text"
//                   placeholder="Your Question Here"
//                   className="form-control "
//                   ref={questionDom}
//                 />
//               </div>

//               <div>
//                 <textarea
//                   class="form-control p-4"
//                   id="exampleFormControlTextarea1"
//                   rows="3"
//                   placeholder="Question Description "
//                   ref={descriptionDom}
//                 ></textarea>
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="tag"
//                   className="form-control mt-2 "
//                   ref={tagDom}
//                 />
//               </div>
//               <div className=" mt-2">
//                 <button
//                   className="btn btn-primary fw-bold px-5 action_btn"
//                   type="Submit"
//                 >
//                   Post your Question
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default AskQuestion;



// import React, { useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../axiosConfig";
// import { AppState } from "../../App";
// import LayOut from "../../components/LayOut/LayOut";
// import { ClipLoader } from "react-spinners"; // Import the spinner

// const AskQuestion = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AppState);
//   const token = localStorage.getItem("token");

//   const questionDom = useRef(null);
//   const descriptionDom = useRef(null);
//   const tagDom = useRef(null);

//   const [loading, setLoading] = useState(false); // Loading state
//   const [successMessage, setSuccessMessage] = useState(""); // Success message state

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const questionValue = questionDom.current.value;
//     const descriptionValue = descriptionDom.current.value;
//     const tagValue = tagDom.current.value;

//     if (!questionValue || !descriptionValue || !tagValue) {
//       alert("Please provide all required fields");
//       return;
//     }

//     try {
//       // Post the question
//       const response = await axios.post(
//         "/questions",
//         {
//           question: questionValue,
//           description: descriptionValue,
//           tag: tagValue,
//         },
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       // Clear form inputs
//       questionDom.current.value = "";
//       descriptionDom.current.value = "";
//       tagDom.current.value = "";

//       console.log(response, "response");

//       // Set success message and loading
//       setSuccessMessage("Your Question Has Been Successfully Posted. Redirecting to Home Page....");
//       setLoading(true); // Start loading to display spinner

//       // Wait for 4 seconds before navigating
//       setTimeout(() => {
//         setLoading(false); // Stop loading
//         setSuccessMessage(""); // Reset success message
//         navigate("/"); // Navigate back to the homepage
//         window.location.reload(); // Optionally reload the page
//       }, 4000);
      
//     } catch (error) {
//       alert("Something went wrong");
//       console.log(error.response);
//     }
//   }

//   return (
//     <LayOut>
//       <section>
//         <div className="container d-flex flex-column align-items-center mt-4 ">
//           <div className="justify-content-around ">
//             <h2>Steps to Write a Good Question</h2>
//           </div>
//           <div>
//             <ul>
//               <li>Summarize your problem in a one-line-title.</li>
//               <li>Describe your problem in more detail.</li>
//               <li>Describe what you tried and what you expected to happen.</li>
//               <li>Review your question and post it to the site.</li>
//             </ul>
//           </div>
//         </div>

//         <div className="d-flex flex-column align-items-center container shadow-sm p-3 mb-5 bg-body rounded">
//           <div className="mt-5 pt-4">
//             <h3>Ask a Public Question</h3>
//           </div>

//           {/* Show success message here */}
//           {successMessage && (
//             <div className="mt-3 text-success text-center">
//               {successMessage}
//               <div className="d-flex justify-content-center align-items-center" style={{ height: "50px" }}>
//                 <ClipLoader color="#007bff" size={30} />
//               </div>
//             </div>
//           )}

//           <div className="container">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-2">
//                 <input
//                   type="text"
//                   placeholder="Your Question Here"
//                   className="form-control"
//                   ref={questionDom}
//                 />
//               </div>

//               <div>
//                 <textarea
//                   className="form-control p-4"
//                   rows="3"
//                   placeholder="Question Description"
//                   ref={descriptionDom}
//                 ></textarea>
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="Tag"
//                   className="form-control mt-2"
//                   ref={tagDom}
//                 />
//               </div>

//               <div className="mt-2">
//                 <button
//                   className="btn btn-primary fw-bold px-5 action_btn"
//                   type="submit"
//                 >
//                   Post Your Question
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// };
import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import { AppState } from "../../App";
import LayOut from "../../components/LayOut/LayOut";
import { ClipLoader } from "react-spinners"; // Import the spinner

const AskQuestion = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppState);
  const token = localStorage.getItem("token");

  const questionDom = useRef(null);
  const descriptionDom = useRef(null);
  const tagDom = useRef(null);

  const [loading, setLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  async function handleSubmit(e) {
    e.preventDefault();
    const questionValue = questionDom.current.value;
    const descriptionValue = descriptionDom.current.value;
    const tagValue = tagDom.current.value;

    // Reset error message on submit
    setErrorMessage("");

    if (!questionValue || !descriptionValue || !tagValue) {
      setErrorMessage("Please provide all required fields");
      return;
    }

    try {
      // Post the question
      const response = await axios.post(
        "/questions",
        {
          question: questionValue,
          description: descriptionValue,
          tag: tagValue,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Clear form inputs
      questionDom.current.value = "";
      descriptionDom.current.value = "";
      tagDom.current.value = "";

      console.log(response, "response");

      // Set success message and loading
      setSuccessMessage(
        "Your Question Has Been Successfully Posted. Redirecting to Home Page...."
      );
      setLoading(true); // Start loading to display spinner

      // Wait for 4 seconds before navigating
      setTimeout(() => {
        setLoading(false); 
        setSuccessMessage(""); 
        navigate("/"); // Navigate back to the homepage
        window.location.reload(); // Optionally reload the page
      }, 4000);
    } catch (error) {
      alert("Something went wrong");
      console.log(error.response);
    }
  }

  return (
    <LayOut>
      <section>
        <div className="container d-flex flex-column align-items-center mt-4 ">
          <div className="justify-content-around ">
            <h2>Steps to Write a Good Question</h2>
          </div>
          <div>
            <ul>
              <li>Summarize your problem in a one-line-title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center container shadow-sm p-3 mb-5 bg-body rounded">
          <div className="mt-5 pt-4">
            <h3>Ask a Public Question</h3>
          </div>

          {/* Display error message if it exists */}
          {errorMessage && (
            <div className="mt-2 text-danger">{errorMessage}</div>
          )}

          {/* Show success message here */}
          {successMessage && (
            <div className="mt-3 text-success text-center">
              {successMessage}
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "50px" }}
              >
                <ClipLoader color="#007bff" size={30} />
              </div>
            </div>
          )}

          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Question title"
                  className="form-control"
                  ref={questionDom}
                />
              </div>
              <br />
              <br />

              <div>
                <textarea
                  className="form-control p-4"
                  rows="3"
                  placeholder="Question Detail ..."
                  ref={descriptionDom}
                ></textarea>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Tag"
                  className="form-control mt-2"
                  ref={tagDom}
                />
              </div>

              <div className="mt-2">
                <button
                  className="btn btn-primary fw-bold px-5 action_btn"
                  type="submit"
                >
                  Post Your Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default AskQuestion;
