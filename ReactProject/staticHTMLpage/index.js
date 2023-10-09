ReactDOM.render(<div>
    <h1 className='header'>UncleBola.</h1>
    <h2>Hoping for blessing</h2>
    <h3>Working so hard to recieve it</h3>
    <h4>It is a case of no retract or surrender</h4>
    <p>case closed</p>
    </div>, document.getElementById("root"))

//anpthor method

const place = (
    <nav>
   <h1 className='header'>UncleBola awesome website with React</h1>
   <h2>Hoping for blessing</h2>
   <h3>Working so hard to recieve it</h3>
   <h4>It is a case of no retract or surrender</h4>
   <ol>
    <li>He's competitive</li>
    <li>He's energetic</li>
    <li>He's humble</li>
    <li>He's Down to earth</li>
   </ol>
   <p>case closed.</p>
    </nav>
)

// document.getElementById("root").append(JSON.stringify(place))
// this about show us the the way javascript see it

ReactDOM.render(
    place, document.getElementById("root")
)