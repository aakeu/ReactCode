ReactDOM.render(<div>
   <img src="./logo.png" width="100" />
   <h1>Fun facts about React.</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>, document.getElementById("root"))

    // another method


const place = (
    <div>
    <img src="./images.png" width="80px" />
     <h1>Fun facts about React.</h1>
     <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
)

ReactDOM.render(
    place, document.getElementById("root")
)

// caling a function

function TemporaryName() {
    return(
        <div>
    <img src="./images.png" width="80px" />
     <h1>Fun facts about React.</h1>
     <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise appsssss, including mobile apps</li>
    </ul>
    </div> 
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))


//practice

function Coding(){
    return(
        <div>
        <header>
            <nav>
                <img src="./images.png" alt="react logo"  width="100"/>
                </nav>
    </header>
     
<h1> Why i love to study React</h1>
<ol>
    <li>Conveniet</li>
    <li>Awesome</li>
    <li>Likable</li>
    <li>Effective</li>
</ol>
<footer> 
    <small>
        © 2023 UncleBola development. All rights reserved
    </small>
    </footer>
</div>
)}

ReactDOM.render(<Coding />, document.getElementById("root"))