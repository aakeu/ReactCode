window.box = function box(props) {
 

    const style = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return(
        <div style={styles}
             className="box"
             onClick={()=>props.toggle(props.id)}
             >

             </div>

        
    )}
