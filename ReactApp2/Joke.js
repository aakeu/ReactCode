window.Joke = function Joke(props) {
    console.log(props.isFunny)
    return(
     <div>
        {/* the setup outside the bracket {} will show. it is saying
        if prosp.setup is true then render the property. both next two line achieve 
        same thing */}
        <h3 style={{display:props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
      {props.setup && <h3>Setup: {props.setup}</h3> }
        <p>Punchline: {props.punchline}</p>
        </div> 

    )
}

