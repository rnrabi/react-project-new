import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card/Card';

function App() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setMeal(data.categories))

  }, [])
  // console.log(meal)

  return (
    <div className="App">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {meal.map(food => <Card 
        img={food.strCategoryThumb}
         name={food.strCategory}
          description={food.strCategoryDescription}
          key={food.idCategory}
          ></Card>)}
      </div>
    </div>
  )
}

export default App
