import React from 'react'



const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pizzería Mamma Mia!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">🍕 Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">🔐 Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">🔐 Registerg</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">🛒 Total: $25.000
</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
