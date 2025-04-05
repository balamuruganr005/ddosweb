// Log user visit to backend
async function logUserVisit() {
    try {
        console.log("Logging user visit...");

        const response = await fetch("https://backend-6yqh.onrender.com/traffic-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                request_size: Math.floor(Math.random() * 900) + 100, // 100–1000 bytes
                request_type: "GET",
                destination_port: 443,
                user_agent: navigator.userAgent,
                timestamp: new Date().toISOString(), // Add timestamp
            }),
        });

        const result = await response.json();
        console.log("User visit logged:", result);
    } catch (error) {
        console.error("Error logging user visit:", error);
    }
}

// Load traffic graph
async function loadTrafficGraph() {
    try {
        const response = await fetch("https://backend-6yqh.onrender.com/traffic-graph");
        if (!response.ok) throw new Error("Failed to load traffic graph");

        const blob = await response.blob();
        const imgURL = URL.createObjectURL(blob);
        document.getElementById("trafficGraph").src = imgURL;
    } catch (error) {
        console.error("Error loading traffic graph:", error);
    }
}

// Call both functions on page load
window.onload = function () {
    logUserVisit();
    loadTrafficGraph();
};

// Product grid remains unchanged
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

const productGrid = document.querySelector(".product-grid");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;

    productGrid.appendChild(productDiv);
});
