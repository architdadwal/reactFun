import "./styles.css";

function App() {
  const show = false;

  function Test() {
    return (
      <div>
        {" "}
        <h1> Hey </h1>{" "}
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {show ? <Test /> : " Your component does not exists  "}
    </div>
  );
}
export default App;
