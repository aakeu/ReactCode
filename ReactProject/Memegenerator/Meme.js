window.Meme = function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        // randomImage: "http://i.imgflip.com/Ibij.jpg"
        randomImage: "https://firebasestorage.googleapis.com/v0/b/foodelivery-73562.appspot.com/o/RRectangle%2033%402x.png?alt=media&token=0378d0c0-0cb3-47ed-833d-a8d4ac6cec46&_gl=1*1fmtkt6*_ga*MTQ4ODU0MjI4My4xNjk2MjQ4Njg2*_ga_CW55HF8NVT*MTY5NzM5MDc4MC4xNC4xLjE2OTczOTA4NzIuMzIuMC4w"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    let url
    // const [memeImage, setMemeImage] = React.useState("")


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // url = memesArray[randomNumber].url
        console.log(url)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main className="yes">
            <p>{url}</p>
            <div className="form">
               
                <input className="form--input" type="text" placeholder="shut up" />
                <input className="form--input"type="text" placeholder="and take my money" />
               
                <button onClick={getMemeImage} className="form--button" type="submit">Get a new meme image 🖼</button>
             </div> 
             <img 
             src={meme.randomImage}
             alt="meme image"
             className="meme--image"
             />
        </main>
    )
}





