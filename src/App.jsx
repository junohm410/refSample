import { useRef } from "react";
import "./App.css";
import FrontContents from "./FrontContents";
import Header from "./Header";

function App() {
  const targetRef = useRef(null)

  return (
    <>
      <Header targetRef={targetRef} />
      <FrontContents targetRef={targetRef} />
    </>
  );
}

export default App;
