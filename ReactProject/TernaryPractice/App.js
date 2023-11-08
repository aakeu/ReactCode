//one option 

function App() {

  const isGoingOut = true
  let result = isGoingOut === true ? "Yes" : "No"
 
  return(
  <div className="state">
    <h1 className="state--title">Do you feel like going out tonight?</h1>
    <div className="state--vaule">
        <h1>{result}</h1>
    </div>
   
  </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))


//another option

function App() {

    const isGoingOut = false
    let result = isGoingOut ? "Yes" : "No"
   
    return(
    <div className="state">
      <h1 className="state--title">Do you feel like going out tonight?</h1>
      <div className="state--vaule">
          <h1>{result}</h1>
      </div>
     
    </div>
     )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))

  //anothe option, puting the ternary in the {}

  function App() {

    const isGoingOut = false
    
   
    return(
    <div className="state">
      <h1 className="state--title">Do you feel like going out tonight?</h1>
      <div className="state--vaule">
          <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
     
    </div>
     )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))


  //another way combining ternary and state


  function App() {

    const[isGoingOut, setIsGoingOut] = React.useState(false)
    
    function changeMind() {
      setIsGoingOut(prevState => !prevState)
    
    }
   
    return(
    <div className="state">
      <h1 className="state--title">Do you feel like going out tonight?</h1>
      <div onClick={changeMind} className="state--vaule">
          <h1>{isGoingOut ? "Yes" : "No"}</h1> {/* this is the ternary */} 
      </div>
     
    </div>
     )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))