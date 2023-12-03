
window.Star = function Star(props){
    starIcon = props.isFilled ?  "Goldenstar.svg" :  "star.svg"
    return(
        <img 
        src={`./images/${starIcon}`}
        className="card--favorite"
        onClick={props.handleClick}
        />
  )
}




