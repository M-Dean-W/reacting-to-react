import React, {useState, useEffect} from "react";
import Greeter from "./components/Greeter";

const App = () => {

    const [username, setUsername] = useState('')
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
          }, 3000);
    }, [loaded])

    if (!loaded) {
        
        return (
        <div>

         <h1>Website Loading...</h1>
         <button onClick={() => setLoaded(true)}>Load page now!</button>
        </div>
        )

    }
    
    return (

        <div>
            <h1>Will the Broncos have a winning season in 2024?</h1>
        
            <Greeter name ="MD" phrase = 'I like to game' />
            <Greeter name ="Fatts" phrase = 'I like to troll'/>
            <Greeter name ="Katie" phrase = 'I like to read'/>
            <input value={username} onChange={e => setUsername(e.target.value)}  />
            <p>You are logging in as: {username}</p>
        
        </div>
    )

}

export default App