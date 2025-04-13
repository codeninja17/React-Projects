import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  // valid status : loading, error, ready, active, finished
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action Unknown !!");
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:9000/questions");
        if (!response.ok) {
          throw new Error("Error while fetching data");
        }

        const questions = await response.json();
        dispatch({ type: "dataReceived", payload: questions });
      } catch (error) {
        console.log(error);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  const numOfQuestions = questions.length;

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
