import React from 'react'

const CardPizza = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imagen} className="card-img-top" alt="{props.nombre}" />
      <div className="card-body">
        <h5 className="card-title">Pizza {props.nombre}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <p>Ingredientes</p>
            🍕 {props.ingredientes}
        </li>
        
      </ul>
      <div className="card-body">
        <li className="list-group-item">Precios: ${props.precio}</li>
        <button type="button" class="btn btn-secondary">Ver mas</button>
        <button type="button" class="btn btn-dark">Añadir</button>
      </div>
    </div>

  )
}

export default CardPizza
