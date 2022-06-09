import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  //let currentList ;

  let [currentList, changeList] = React.useState(["hello", "sss"]);
  let [input, changeinput] = React.useState("");
  // function changeList(x){
  //   return currentList.append(x);
  // }

  function changeInputHandler(e) {
    changeinput(e.target.value);
  }
  function addList() {
    changeList([...currentList, input]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>the following app is a todo list </p>
        <p>To do list :</p>
        {/* <form> */}
        <input
          type="text"
          id="fname"
          name="fname"
          value={input}
          onChange={(e) => changeInputHandler(e)}
        ></input>{" "}
        <br></br>
        <button onClick={addList}>Submit</button>
        {/* <input type="submit" value="Submit"></input> */}
        {/* </form> */}
        <p>List below :</p>
        <ul>
          {currentList &&
            currentList.map((x, index) => <li key={index}>{x}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
