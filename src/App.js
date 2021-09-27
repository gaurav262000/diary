import Book from "./components/book";
import { Route } from "react-router-dom";
import OldDiary from "./components/oldDairy";
import NavBar from "./components/navBar";
//import Old_data from "./components/oldDiary/old_data";
function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={Book} />
      <Route path="/Read" exact component={OldDiary} />
    </>
  );
}

export default App;
