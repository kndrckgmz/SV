import React, {useState, useEffect} from 'react';
import Login from "./Loginpage";

  function App() {  

    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, [])

    return (       
      <div>
        {loading ?
          (
          <div className="middle">
          <div className="loader">Loading...</div>
          </div>
          )
          :
          ( 
            <Login/>         
          )    
        }
        </div>
      );
  }

export default App;