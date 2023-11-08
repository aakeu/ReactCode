window.Index = function Index(props) {

    function handleClick()
    {
        console.log("I was clicked!")
    }

    function handleOnMouseOver()
    {
        console.log("Bola kept the MouseOver")
    }

    return(
        <div>
            <div>
            <img 
            src="./images/ocean.jpeg"
            onMouseOver={handleOnMouseOver}
            alt="place pics"
            className=""
            />
    </div>
            <button onClick={handleClick}>Click me</button>

        </div>
    )
}
