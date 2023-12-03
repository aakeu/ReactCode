function App(props) {
    const[squares, setSquares] = React.useState(box) 
    // document.gerElementById
   
    const styles ={
        // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
        backgroundColor: props.on ? "#222222" : "none",
        borderRadius: props.darkMode ? "10px" : "0px"
    }
    const squareElements = squares.map(square =>
            <div style={styles} className="box" key={square.id}> </div>
        )

   return(
    <main>
        {squareElements}
    </main>
  
    )
 }
 
 ReactDOM.render(<App darkMode={true}  />, document.getElementById("root"))


// another way


