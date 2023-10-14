window.Card = function Card(props){
    console.log(props)
    let badgeText
    if (props.card.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online")
    {
        badgeText= "ONLINE"
    }



    return(
  
    <div className="card">
        {/* {props.openSpots === 0 && <div className="card--badge">{badgeText}</div>} */}
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img 
        src={`./images/${props.card.coverImg}`}
        alt="swimmer swiming"
        className="card--image"
        />

        <div className="card--stats">
        <img 
        src="./images/star.svg"
        alt="shinning star"
        className="starr" 
        />
        <span>{props.card.stats.rating}</span>
        <span className="gray">{props.card.stats.reviewCount} -</span>
        <span className="gray">{props.card.location}</span>
        </div>
        <p>{props.card.title}</p>
        <p> <span className="bold">{props.card.price}</span> / person</p>
    </div>


 )
}

