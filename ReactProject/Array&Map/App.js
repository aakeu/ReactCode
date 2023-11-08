
// for Array

function App() {

    const thingsArray = ["Thing 1", "Thing 2"]
    let thing

    function getThing () {
        const randomNumber = Math.floor(Math.random() * thingsArray.length)
        thing = thingsArray[randomNumber]
        console.log(thing)
    }
   
    return(
   <div>
    <button onClick={getThing}>Add Item</button>
    
   </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


// for maps 

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
   
function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`
    thingsArray.push(newThingText)
    console.log(thingsArray)
}

    return(
   <div>
    <button onClick={addItem}>Add Item</button>
    {thingsElements}
    
   </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


//combining both array and maps

function App() {

    const thingsArray = ["Thing 1", "Thing 2"]
    let thing = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function getThing () {
        const randomNumber = Math.floor(Math.random() * thingsArray.length)
        thing = thingsArray[randomNumber]
        console.log(thing)
    }
   
    return(
   <div>
    <button onClick={getThing}>Add Item</button>
    {thing}
   </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


// introducing use state

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem(){
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return(
   <div>
    <button onClick={addItem}>Add Item</button>
    {thingsElements}
    
   </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


//yes boss- personalizing it 

function App() {
  const [things, setThings] = React.useState(["BolaMove 1", "BolaMove 2"])

    function addItem(){
       const newBolatext = `BolaMove ${things.length + 1}`
       setThings (prevState => [...prevState, newBolatext])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return(
   <div>
    <button onClick={addItem}>Add Item</button>
    {thingsElements}
    
   </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root")) 