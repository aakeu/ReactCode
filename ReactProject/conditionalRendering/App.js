window.App = function App(props) {
    const [message, setMessages] = React.useState(["a", "b"])

 
   
    return(
     <div> 
        {
        setMessages.length > 0 && 
        <h1>You have {message.length} unread message!</h1>
        }
     </div>
    )}
