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