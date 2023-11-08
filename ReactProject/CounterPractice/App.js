// // one method 

function App() {
   
   const[count, setCount] = React.useState(0)

  function add (){
    console.log("Add")
    setCount(count + 1)
  }

  function subtract (){
    console.log("subtract")
    setCount(count - 1)
  }

  return(
  <div className="counter">
    <button className="counter--minus" onClick={subtract}>-</button>
    <div className="counter--count">
        <h1>{count}</h1>
    </div>
    <button className="counter--plus" onClick={add}>+</button>
   
  </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))

//standard method 1

function App() {
   
    const[count, setCount] = React.useState(0)
 
   function add (){
     setCount(function(oldValue) {
        return oldValue + 1
     })
   }
 
   function subtract (){
     
    setCount(function(oldValue) {
        return oldValue - 1
     })
   }
 
   return(
   <div className="counter">
     <button className="counter--minus" onClick={subtract}>-</button>
     <div className="counter--count">
         <h1>{count}</h1>
     </div>
     <button className="counter--plus" onClick={add}>+</button>
    
   </div>
    )
 }
 
 ReactDOM.render(<App />, document.getElementById("root"))

 ///2 this is the best practices 

 function App() {
   
    const[count, setCount] = React.useState(0)
 
   function add (){
     setCount(prevCount => prevCount + 1)
   }
 
   function subtract (){
     
    setCount(prevCount => prevCount - 1)
   }
 
   return(
   <div className="counter">
     <button className="counter--minus" onClick={subtract}>-</button>
     <div className="counter--count">
         <h1>{count}</h1>
     </div>
     <button className="counter--plus" onClick={add}>+</button>
    
   </div>
    )
 }
 
 ReactDOM.render(<App />, document.getElementById("root"))