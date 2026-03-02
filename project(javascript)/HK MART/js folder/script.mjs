import {getProducts} from './products.mjs'

const displayProducts = (productToDisplay) => {

  const container = document.getElementById("products_container");

  console.log('productToDispaly' , productToDisplay);
  
  if (!container) return;

  if (productToDisplay.length === 0) {
    container.innerHTML = `
     <div class="col-12">
        <div>
        <span>
        <i class="bi bi-search"></i>
        </span>
        <h3>No Products Found.</h3>
        <p>Try adjusting your search or filter</p>
        </div>
     </div>
    `;

    return;
  }

  container.innerHTML = productToDisplay.map((p) => {
    return `
    <div class="col py-4">
      <div class="card" style="width: 18rem;">
        <img src=${p.image} class="card-img-top" alt="product image">
        <div class="card-body">
          <h5 class="card-title text-truncate">${p.name}</h5>
          <p class="card-text text-truncate">${p.description}</p>
          <p class="card-text">$${p.price}</p>
        </div>
        <div class="card-body">
          <a href="#" class="btn btn-primary">AddToCart</a>
        </div>
      </div>
    </div>
  `
  }).join('');
};

// filter

const filterProducts = () => {

  const searchTerm = document.getElementById('search-input').value.toLowerCase()
  
  const category = document.getElementById('category-filter').value

  const sortby = document.getElementById('sort-filter').value

  let products =  getProducts()

  // search
  
  if(searchTerm){
    products = products.filter((p) => p.name.toLowerCase().includes(searchTerm))
  }

  // category

  if(category !== 'all'){
    products = products.filter((p) => p.category === category)
  }

  // sort

  switch(sortby){
    case 'price-low':
      products.sort((a , b) => a.price - b.price)
    break
    case 'price-high':
      products.sort((a , b) => b.price - a.price)
    break
    case 'name':
      products.sort((a , b) => a.name.localeCompare(b.name))
    }

    displayProducts(products)
  
  }

  document.addEventListener('DOMContentLoaded' , function(){


    displayProducts(getProducts())

    document.getElementById('search-input')?.addEventListener('input' , filterProducts)
    document.getElementById('category-filter')?.addEventListener('change' , filterProducts)
    document.getElementById('sort-filter')?.addEventListener('change' , filterProducts)

  })

