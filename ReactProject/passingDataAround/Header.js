window.Header = function Header(props){

    // const [user, setUser] = React.useState("Joe")

    return(
        <header>
           <p>Current User: {props.user}</p>
    </header>
  )
}