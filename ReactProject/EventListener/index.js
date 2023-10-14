window.Index = function Index(props) {

    function handleClick()
    {
        console.log("I was clicked!")
    }

    return(
        <div>
            <div>
            <img 
            src="./images/ocean.jpeg"
            alt="place pics"
            className=""
            />
    </div>
            <button onClick={handleClick}>Click me</button>

        </div>
    )
}
