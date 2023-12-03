function App(props) {
    const[on, setOn] = React.useState(props.on) 
    // document.gerElementById
    const styles ={
     
        backgroundColor: on ? "#222222" : "transparent"
     
    }

 
 function toggle(id) {
    setOn(prevOn => !prevOn)
 }

 const squareElements = squares.map(square =>
    <div style={styles} onClick={toggle}  className="box" key={square.id} id={square.id}> </div>
)

   return(
    // <div style={styles} className="box" onClick={toggle} key={square.id}></div>
    <main>
    {squareElements}
    </main>
    )
 }
 
 ReactDOM.render(<App   />, document.getElementById("root"))