// Array of sample product data
const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999,
    image: 'assets/images/laptop.webp',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699,
    image: 'assets/images/smartphone.jpg',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 199,
    image: 'assets/images/headphone.webp',
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Tablet',
    price: 499,
    image: 'assets/images/Tablet.jpg',
    category: 'Electronics',
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 299,
    image: 'assets/images/smartwatch.jpg',
    category: 'Electronics',
  },
  {
    id: 6,
    name: 'Camera',
    price: 799,
    image: 'assets/images/camera.jpg',
    category: 'Electronics',
  },
  {
    id: 7,
    name: 'Printer',
    price: 149,
    image: 'assets/images/printer.jpg',
    category: 'Electronics',
  },
  {
    id: 8,
    name: 'Monitor',
    price: 349,
    image: 'assets/images/moniter.jpg',
    category: 'Electronics',
  },
  {
    id: 9,
    name: 'Keyboard',
    price: 79,
    image: 'assets/images/keyboard.webp',
    category: 'Electronics',
  },
  {
    id: 10,
    name: 'Mouse',
    price: 49,
    image: 'assets/images/moues.jpg',
    category: 'Electronics',
  },
  {
    id: 11,
    name: 'Shampoo',
    price: 15,
    image: 'assets/images/shampoo.webp',
    category: 'Cosmetics',
  },
  {
    id: 12,
    name: 'Conditioner',
    price: 18,
    image: 'assets/images/conditioner.webp',
    category: 'Cosmetics',
  },
  {
    id: 13,
    name: 'Face Cream',
    price: 25,
    image: 'assets/images/face cream.jpg',
    category: 'Cosmetics',
  },
  {
    id: 14,
    name: 'Lipstick',
    price: 12,
    image: 'assets/images/lipstick.webp',
    category: 'Cosmetics',
  },
  {
    id: 15,
    name: 'Perfume',
    price: 50,
    image: 'assets/images/perfume.jpg',
    category: 'Cosmetics',
  },
  {
    id: 16,
    name: 'Hair Oil',
    price: 20,
    image: 'assets/images/Hair Oil.jpg',
    category: 'Cosmetics',
  },
  {
    id: 17,
    name: 'Moisturizer',
    price: 22,
    image: 'assets/images/Moisturizer.webp',
    category: 'Cosmetics',
  },
  {
    id: 18,
    name: 'Foundation',
    price: 30,
    image: 'assets/images/foundition cream.avif',
    category: 'Cosmetics',
  },
  {
    id: 19,
    name: 'Mascara',
    price: 14,
    image: 'assets/images/mascara.webp',
    category: 'Cosmetics',
  },
  {
    id: 20,
    name: 'Nail Polish',
    price: 8,
    image: 'assets/images/nail polish.webp',
    category: 'Cosmetics',
  },
];

// Function to generate random products
function generateRandomProducts(count) {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to display products grouped by category
function displayProducts(products) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedProducts).sort();

  sortedCategories.forEach((category) => {
    const categoryProducts = groupedProducts[category];

    // Add category header
    const categoryHeader = `<h3 class="mt-4 mb-3">${category}</h3>`;
    productList.innerHTML += categoryHeader;

    // Add products for this category
    const categoryRow = `<div class="row" id="${category.toLowerCase()}-products">`;
    productList.innerHTML += categoryRow;

    categoryProducts.forEach((product) => {
      const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += productCard;
    });

    productList.innerHTML += '</div>';
  });
}

// Function to add product to cart (placeholder)
function addToCart(productId) {
  alert(`Product ${productId} added to cart!`);
}

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
  const randomProducts = generateRandomProducts(12); // Display 12 random products
  displayProducts(randomProducts);
});
