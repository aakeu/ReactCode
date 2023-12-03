window.Joke = function Joke(props) {
    console.log(props.isFunny)
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
      setIsShown(prevShown => !prevShown)
    }

    return(
     <div>
        {/* the setup outside the bracket {} will show. it is saying
        if prosp.setup is true then render the property. both next two line achieve 
        same thing */}
        {/* <h3 style={{display:props.setup ? "block" : "none"}}>Setup: {props.setup}</h3> */}
   
      {props.setup && <h3>Setup: {props.setup}</h3> }
        {isShown && <p>Punchline: {props.punchline}</p>}
        {/* {isShown && <button onClick={toggleShown}>Hide Puchline</button>}
        {!isShown && <button onClick={toggleShown}>Show Puchline</button>} */}
        <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
        <hr />
        </div> 

    )
}

const cond1 = false 
const cond2 = false
if(cond1 && console.log("Hello there")){

}