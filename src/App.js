import './App.css'

import ShowAnimal from './ShowAnimal'
import { useState } from 'react'

function getRandomAnimal () {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}

export default function App(){
  const [animals, setAnimals] = useState(['cow'])

  const handleClick = () => {
   setAnimals([...animals, getRandomAnimal()])
  }

  const renderAnimals = animals.map((animal, index) => {
    return <ShowAnimal type={animal} key={index} />
  })

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderAnimals}</div>
    </div>
  )
}