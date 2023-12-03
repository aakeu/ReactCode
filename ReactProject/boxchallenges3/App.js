window.App = function App(props) {
    const [square, setSquare] = React.useState(boxes)

    function toggle(id){
        setSquares(prevSquares => {
            const newSquare = []
            for(let i = 0; i < prevSquares.lenght; i++){
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id){
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquare.push(updatedSquare)
                }else {
                    newSquare.push(currentSquare)
                }
            }
            return newSquares
        })
    }


// function toggle(id) {
//     setSquares(prevSquares => {
//         return prevSquares.map(square) => {
//             return square.id === id ? {...square, on: !square.on} : square
//         })
//     })
// }

    const squareElements = square.map(square => {
        <Box 
        key={square.id}
        id={square.id}
        on={square.on}
        toggle={toggle}
        />
    })
    return(
     <main> 
        {squareElements}
     </main>
    )}
