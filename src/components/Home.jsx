import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import "../Home.css"
import { pizzas } from './pizzas'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="card-container">

        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            imagen={pizza.img}
            nombre={pizza.name}
            ingredientes={pizza.ingredients.join(', ')}
            precio={pizza.price.toLocaleString()}
          />
        ))}

      </div>
    </div>
  )
}

export default Home
