window.Card = function Card(props){
    console.log(props)
    return(
  
    <div className="card">
        <img 
        src={`./images/${props.img}`}
        alt="swimmer swiming"
        className="airswims"
        />

        <div className="cardStatus">
        <img 
        src="./images/star.svg"
        alt="shinning star"
        className="starr" 
        />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} -</span>
        <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p> <span className="bold">{props.price}</span> / person</p>
    </div>






 )
}