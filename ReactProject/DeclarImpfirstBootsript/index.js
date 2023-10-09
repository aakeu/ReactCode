// Declarative method 1
ReactDOM.render(<h1 className='header'>Hello! React</h1>, document.getElementById("root"))

//multiple child
ReactDOM.render(<div>
    <h1 className='header'>React! Work work.</h1>
    <p>Seing how mutiple child will work</p>
    </div>, document.getElementById("root"))


//imperative method 2
const p = document.createElement("p")
p.textContent = "Learning the imperative way to program"
p.className = "header"
document.getElementById("root").append(p)

//3- it is either 1 or 3 both can't work together and the last one use is what will matter 
const people = <h2 class="header">This is another way </h2>
console.log(people)
ReactDOM.render(people, document.getElementById("root"))

//mutiple child 
const yes = (
    <div>
        <h1 className="header">This is the JSX way</h1>
        <p>This is a learning session</p>
    </div>
)
ReactDOM.render(
    yes,
    document.getElementById("root")
)


//example

const navbar = (
    <nav>
    <h1>UncleBola</h1>,
    <ul>
        <li>pricing</li>
        <li>About</li>
        <li>Contract</li>
    </ul>
    </nav>
)

ReactDOM.render(
    navbar, document.getElementById("root")
)