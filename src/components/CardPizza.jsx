import React from 'react'

const CardPizza = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={props.imagen} className="card-img-top" alt={props.nombre} />
      <div className="card-body">
        <h5 className="card-title">Pizza {props.nombre}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <p><strong>Ingredientes</strong></p>
            <ul>
              {props.ingredientes.map((ing, index) => (
                <li key={index}>🍕 {ing}</li>
              ))}
            </ul>

        </li>
        
      </ul>
      <div className="card-body">
        <p className="card-text"><strong>Precios:</strong> ${props.precio}</p>
        <button type="button" className="btn btn-secondary m-1">Ver más</button>
        <button type="button" className="btn btn-dark m-1">Añadir</button>
      </div>
    </div>

  )
}

export default CardPizza
