
//another way of doing it 

function App() {
    const result = React.useState("Jamal said yes")
    console.log(result)
  return(
  <div className="state">
    <h1 className="state--title">Is state important to know?</h1>
    <div className="state--vaule">
        <h1>{result[0]}</h1>
    </div>
   
  </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))


//using destructing method

function App() {
    const [result, func] = React.useState("Jamal said yes")
    console.log(result)
  return(
  <div className="state">
    <h1 className="state--title">Is state important to know?</h1>
    <div className="state--vaule">
        <h1>{result}</h1>
    </div>
   
  </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))


//conventional way of using state to change event

function App() {
    const [result, setResult] = React.useState("Jamal said yes")
  
    console.log(result)

    function handleClick(){
        setResult ("Jamal said No") 
    }

  return(
  <div className="state">
    <h1 className="state--title">Is state important to know?</h1>
    <div className="state--vaule" onClick={handleClick}>
        <h1>{result}</h1>
    </div>
   
  </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))