

// example of render for time of the day

function Index() {
    const firstName = "Uncle"
    const lastName = "Bola"
    const date = new Date ()
    const hours = date.getHours() % 12

    let timeofDay

    if (hours < 12)
    {
        timeofDay = "Morning"
    }
    else if (hours >= 12 && hours < 17)
    {
        timeofDay = "Afternoon"
    }
    else if ( hours >= 17 && hours < 20)
    {
        timeofDay = "Evening"
    }
    else
    {
        timeofDay = "Night"
    }


    return(
        <div>
        <h1> Hello {firstName}  {lastName}! why are you resuming at {hours} o'clock!</h1>
        <h1>Good {timeofDay}!</h1>
        </div>
    );

}

ReactDOM.render(<Index />, document.getElementById("root"))