function App() {
const element = <h1>Hello</h1>
console.log(element)
const colors = [
    <h3>Red</h3>,
    <h3>Yellow</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Indigo</h3>,
    <h3>Violet</h3>]

    return(
        
    <div>
    {colors}
    {/* {["Red", "Yellow", "Green", "Blue", "Indigo", "violet"]} */}
    </div> 
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

//another way to the above but above is better because it separte it

// function App() {
//     const element = <h1>Hello</h1>
//     console.log(element)
//     const colors =   ["Red", "Yellow", "Green", "Blue", "Indigo", "violet"]
    
//         return(
            
//         <div>
//         {colors}
//         </div> 
//         )
//     }
    
//     ReactDOM.render(<App />, document.getElementById("root"))