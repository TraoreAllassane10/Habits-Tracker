import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'


function App() {

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    
    const data = [];

    // Pacourir toutes les clés de localStorage
    for (let i = 0; i < localStorage.length; i++) {
      // recuperer une clé
      const key = localStorage.key(i);

      try {

        // stockage de la clé et sa valeur dans uun tableau
        data[key] = JSON.parse(localStorage.getItem(key));

      } catch (error) {
        
      }
    }
    // Mise à jour du state de habits
    setHabits(data)

  }, []);

  console.log(habits)

  return (
    <div className='mx-auto max-w-7xl'>
      <Header/>
      
    </div>
  )
}

export default App
