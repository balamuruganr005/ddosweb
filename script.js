fetch("http://your-server-ip:5000/")
  .then(response => response.json())
  .then(data => console.log("Logged Request:", data))
  .catch(error => console.error("Error:", error));


const products = [
    { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$15", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$25", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$35", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: "$40", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$45", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Product 9", price: "$50", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Product 10", price: "$55", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Product 11", price: "$60", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Product 12", price: "$65", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Product 13", price: "$70", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Product 14", price: "$75", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Product 15", price: "$80", image: "https://via.placeholder.com/150" },
    { id: 16, name: "Product 16", price: "$85", image: "https://via.placeholder.com/150" },
    { id: 17, name: "Product 17", price: "$90", image: "https://via.placeholder.com/150" },
    { id: 18, name: "Product 18", price: "$95", image: "https://via.placeholder.com/150" },
    { id: 19, name: "Product 19", price: "$100", image: "https://via.placeholder.com/150" },
    { id: 20, name: "Product 20", price: "$105", image: "https://via.placeholder.com/150" },
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;
    
    productGrid.appendChild(productDiv);
});